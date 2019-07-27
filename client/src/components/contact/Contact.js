import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import Page from '../page/Page';
import styles from './Contact.module.scss';

const Contact = () => (
    <Page pageTitle="Let's Chat">
        <Helmet
            meta={ [
                { name: 'description', content: 'Find out where I am online and how we can connect with one another.' },
                { property: 'og:title', content: `Let's Chat` },
                { property: 'og:description', content: `Ways to connect on social media` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/contact/' },
                { property: 'og:image', content: 'https://tannerfisc.us/images/og/contact.jpg' }
            ] }
            title={`Let's Chat – Tanner Fiscus`}
        />

        <main className={styles['contact']}>
            <div>
                <h2 className={styles['contact-header']}>What's your preferred channel?</h2>
                <div className={styles['contact-buttons']}>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--in'])}
                        href="https://www.linkedin.com/in/tannerfiscus"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Connect on LinkedIn <img alt="LinkedIn logo" src="/images/in.png" />
                    </a>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--tw'])}
                        href="https://twitter.com/messages/compose?recipient_id=352814979"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Message on Twitter <img alt="Twitter logo" src="/images/twitter.png" />
                    </a>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--fb'])}
                        href="https://m.me/tanner.fiscus"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Chat on Messenger <img alt="Facebook Messenger logo" src="/images/messenger.svg" />
                    </a>
                </div>
            </div>
        </main>
    </Page>
);

export default Contact;