import React from 'react';
import classNames from 'classnames';

import Page from '../page/Page';
import styles from './Contact.module.scss';

const Contact = () => (
    <Page pageTitle="Let's Chat">
        <main className={styles['contact']}>
            <div>
                <h2 className={styles['contact-header']}>What's your preferred channel?</h2>
                <div className={styles['contact-buttons']}>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--in'])}
                        href="https://www.linkedin.com/in/tannerfiscus"
                        target="_blank"
                    >
                        Connect on LinkedIn <img src="/images/in.png" />
                    </a>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--tw'])}
                        href="https://twitter.com/messages/compose?recipient_id=352814979"
                        target="_blank"
                    >
                        Message on Twitter <img src="/images/twitter.png" />
                    </a>
                    <a
                        className={classNames(styles['contact-button'], styles['contact-button--fb'])}
                        href="https://m.me/tanner.fiscus"
                        target="_blank"
                    >
                        Chat on Messenger <img src="/images/messenger.svg" />
                    </a>
                </div>
            </div>
        </main>
    </Page>
);

export default Contact;