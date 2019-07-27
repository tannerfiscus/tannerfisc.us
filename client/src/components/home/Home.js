import React from 'react';
import Helmet from 'react-helmet'

import Page from '../page/Page';
import Text from '../text/Text';

import styles from './Home.module.scss';

const Home = () => (
    <Page>
        <Helmet
            meta={ [
                { name: 'description', content: 'Hi, I\'m Tanner. I\'m a front-end engineer living in the bay area. I have a passion for building a better web.' },
                { property: 'og:title', content: 'Tanner Fiscus' },
                { property: 'og:description', content: 'Front-end developer and designer living in San Francisco, CA.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us' },
                { property: 'og:image', content: 'https://tannerfisc.us/images/og/home.jpg' }
            ] }
            title='Tanner Fiscus – Front-end Developer and Designer'
        />
        
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