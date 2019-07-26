import React from 'react';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import LoadingSpinner from '../../loading/LoadingSpinner';
import Page from '../../page/Page';

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
        <Page>
            <Query query={GET_PROJECTS_QUERY}>
            {({ loading, data }) => {
                if (loading) {
                    return <LoadingSpinner />
                }

                const hasSidebarContent = (data.project.categories && data.project.categories.length) || (data.project.timeline && data.project.timeline.length);

                return (
                    <React.Fragment>
                        <h1 className={styles['portfolio-title']}>
                            {data.project.title}
                        </h1>
                        <img 
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
                    </React.Fragment>
                )
            }}
        </Query>
        </Page>
    );
};

export default Portfolio;