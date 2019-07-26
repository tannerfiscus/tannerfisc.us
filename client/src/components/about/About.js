import React from 'react';

import AboutExperiences from './AboutExperiences';
import Page from '../page/Page';
import styles from './About.module.scss';

const About = () => (
    <Page pageTitle="About">
        <p>I'm a front-end developer who is working with an extraordinarily talented team building the future of Yelp in beautiful San Francisco, CA.</p>
        <p>React is my framework of choice. I am always learning something new and code in vanilla Javascript on the daily. I'm fluent in Javascript, CSS, and HTML.</p>
        <div className={styles['about-tagline']}>
            <p className={styles['about-tagline-text']}>
                I'm passionate about building a better web.
            </p>
        </div>
        <h2>My experiences</h2>
        <AboutExperiences />
    </Page>
);

export default About;