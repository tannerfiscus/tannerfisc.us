import React from 'react';
import classNames from 'classnames';

import { Helmet } from 'react-helmet'

import Layout from '../../components/Layout';
import styles from './index.module.scss';

const Contact = () => (
    <Layout pageTitle="Let's Chat">
        <Helmet
            meta={ [
                { name: 'description', content: 'Find out where I am online and how we can connect with one another.' },
                { property: 'og:title', content: `Let's Chat` },
                { property: 'og:description', content: `Ways to connect on social media` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/contact/' },
                { property: 'og:image', content: 'https://tannerfisc.us/img/og/contact.jpg' }
            ] }
            title={`Let's Chat – Tanner Fiscus`}
        />

        <main className={styles.contact}>
            <div className={styles.contactSocial}>
                <h2 className={styles.contactHeader}>What's your preferred channel?</h2>
                <div className={styles.contactButtons}>
                    <a
                        className={classNames(styles.contactButton, styles.contactButtonIN)}
                        href="https://www.linkedin.com/in/tannerfiscus"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Connect on LinkedIn <img alt="LinkedIn logo" src="/img/in.png" />
                    </a>
                    <a
                        className={classNames(styles.contactButton, styles.contactButtonTW)}
                        href="https://twitter.com/messages/compose?recipient_id=352814979"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Message on Twitter <img alt="Twitter logo" src="/img/twitter.png" />
                    </a>
                    <a
                        className={classNames(styles.contactButton, styles.contactButtonFB)}
                        href="https://m.me/tanner.fiscus"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Chat on Messenger <img alt="Facebook Messenger logo" src="/img/messenger.svg" />
                    </a>
                </div>
            </div>

            <div className={styles.contactForm}>
                <h2 className={styles.contactHeader}>Or, let's keep it old school.</h2>
                <form action="/contact/thanks/" autoComplete="off" name="website-contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
                    <label htmlFor="name">
                        <span>Name</span>
                        <input name="name" type="text" required />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input name="email" type="email" required />
                    </label>
                    <label htmlFor="message">
                        <span>Message</span>
                        <textarea name="message" rows="5" required></textarea>
                    </label>
                    <div className={styles.contactBotField}>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    <input type="hidden" name="form-name" value="website-contact" />
                    <div className={styles.contactFormButton}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    </Layout>
);

export default Contact;
