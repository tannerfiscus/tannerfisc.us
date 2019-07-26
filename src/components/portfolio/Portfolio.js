import React from 'react';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import LoadingSpinner from '../loading/LoadingSpinner';
import Page from '../page/Page';
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
        <Query query={GET_PROJECTS_QUERY}>
        {({ loading, data }) => loading ? <LoadingSpinner /> : (
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
        )}
    </Query>
    </Page>
);

export default Portfolio;