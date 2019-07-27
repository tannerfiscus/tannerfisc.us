import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';

import LoadingSpinner from '../../loading/LoadingSpinner';
import Page from '../../page/Page';
import PortfolioLoadFailure from '../PortfolioLoadFailure';

import styles from './PortfolioItem.module.scss';

const Portfolio = ({ projectName }) => {
    const GET_PROJECTS_QUERY = gql`
        query GetProject {
            project(id: "${projectName}") {
                categories
                descriptions {
                    heading
                    text
                }
                photos {
                    cover {
                        url
                    }
                    linkout
                    project {
                        url
                    }
                }
                timeline {
                    text
                    time
                }
                title
            }
        }
    `;

    return (
        <Query query={GET_PROJECTS_QUERY}>
        {({ loading, data }) => {
            if (loading) {
                return (
                    <Page pageTitle="Portfolio">
                        <LoadingSpinner />
                    </Page>
                );
            }

            if (!data || !data.project) {
                return (
                    <Page pageTitle="Portfolio">
                        <PortfolioLoadFailure />
                    </Page>
                );
            }

            const hasSidebarContent = (data.project.categories && data.project.categories.length) || (data.project.timeline && data.project.timeline.length);

            return (
                <Page pageTitle={data.project.title}>

                    <Helmet
                        meta={ [
                            { name: 'description', content: `Find out what went into building ${data.project.title} with a detailed page summary.` },
                            { property: 'og:title', content: `${data.project.title} – a project by Tanner Fiscus` },
                            { property: 'og:description', content: 'A detailed look at one of the projects I\'ve developed.' },
                            { property: 'og:type', content: 'website' },
                            { property: 'og:url', content: `https://tannerfisc.us/portfolio/${projectName}` },
                            { property: 'og:image', content: 'https://tannerfisc.us/images/og/portfolio.jpg' }
                        ] }
                        title={`${data.project.title} – Project Details – Tanner Fiscus`}
                    />

                    <img 
                        alt=""
                        className={styles['portfolio-cover']}
                        src={`/images/portfolio/${data.project.photos.cover.url}`}
                    />
                    <main className={styles['portfolio-content']}>
                        <div className={styles['portfolio-content-left']}>
                            {
                                data.project.descriptions.map(description => (
                                    <section className={styles['portfolio-description']} key={description.heading}>
                                        <h2>{ description.heading } </h2>
                                        <p dangerouslySetInnerHTML={{ __html: description.text }} />
                                    </section>
                                ))
                            }
                        </div>
                        { hasSidebarContent ?
                            <div className={styles['portfolio-content-right']}>
                                { data.project.categories && Boolean(data.project.categories.length) && (
                                    <React.Fragment>
                                        <h3>Applicable Technologies</h3>
                                        <div className={styles['portfolio-pills']}>
                                            {
                                                data.project.categories.map(category => (
                                                    <div className={styles['portfolio-pill']} key={category}>
                                                        { category }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </React.Fragment>
                                ) }
                                { data.project.timeline && Boolean(data.project.timeline.length) && (
                                    <React.Fragment>
                                        <h3>Timeline of Events</h3>
                                        <div className={styles['portfolio-timeline']}>
                                            {
                                                data.project.timeline.map(timeline => (
                                                    <div className={styles['portfolio-pill']} key={timeline.time}>
                                                        <div className={styles['portfolio-timeline-time']}>
                                                            { timeline.time }
                                                        </div>
                                                        { timeline.text }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </React.Fragment>
                                ) }
                            </div> : null }
                    </main>
                </Page>
            )
        }}
    </Query>
    );
};

export default Portfolio;