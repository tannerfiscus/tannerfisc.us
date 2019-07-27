import React from 'react';

import Page from '../page/Page';
import Text from '../text/Text';

import styles from './Home.module.scss';

const Home = () => (
    <Page>
        <main className={styles['home']}>
            <div>
                <div className={styles['wave']}>
                    <span aria-label="Hand wave" className={styles['wave-emoji']} role="img">👋</span>
                </div>
                <h1 className={styles['home-intro-title']}>Hi, I'm Tanner.</h1>
                <Text className={styles['home-intro-text']}>I'm a San Francisco-based front-end engineer.</Text>
            </div>
        </main>
    </Page>
);

export default Home;