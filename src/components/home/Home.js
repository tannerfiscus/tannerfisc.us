import React from 'react';

import Page from '../page/Page';
import Text from '../text/Text';

import styles from './Home.module.scss';

const Home = () => (
    <Page>
        <div className={styles.wave}>👋</div>
        <h1>Hi, I'm Tanner.</h1>
        <Text>I'm a San Francisco-based front-end developer.</Text>
    </Page>
);

export default Home;