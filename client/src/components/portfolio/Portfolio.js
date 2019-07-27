import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import LoadingSpinner from '../loading/LoadingSpinner';
import Page from '../page/Page';
import PortfolioLoadFailure from './PortfolioLoadFailure';
import styles from './Portfolio.module.scss';

const GET_PROJECTS_QUERY = gql`
    query GetProjects {
        projects {
            id
            photos {
                display {
                    url
                }
            }
            tagline
            title
        }
    }
`;

const Portfolio = () => (
    <Page pageTitle="Portfolio">
        <Helmet
            meta={ [
                { name: 'description', content: 'Travel through time and catch a glimpse of the work that I\'ve developed over the years.' },
                { property: 'og:title', content: 'My Work' },
                { property: 'og:description', content: 'Online portfolio showcasing experiences built and designed by Tanner Fiscus' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/portfolio/' },
                { property: 'og:image', content: 'https://tannerfisc.us/images/og/portfolio.jpg' }
            ] }
            title='My Work – Experiences Built and Designed by Tanner Fiscus'
        />

        <Query query={GET_PROJECTS_QUERY}>
        {({ loading, data }) => {
            if (loading) {
                return <LoadingSpinner />;
            }

            if (!loading && (!data || !Array.isArray(data.projects))) {
                return <PortfolioLoadFailure />
            }

            return (
                <div className={styles['portfolio-list']}>
                    { data.projects.map(project => (
                        <div key={project.id} className={styles['project-item']}>
                            <Link to={`/portfolio/${project.id}`}>
                                <small className={styles['portfolio-item-tagline']}>
                                    { project.tagline }
                                </small>{' '}
                                <span className={`${styles['portfolio-item-title']} typeface-bold`}>
                                    { project.title }
                                </span>
                                <img src={`/images/portfolio/${project.photos.display.url}`} alt={project.title} />
                            </Link>
                        </div>
                    )) }
                </div>
            )
        }}
    </Query>
    </Page>
);

export default Portfolio;