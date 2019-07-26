import React from 'react';

import Header from '../navigation/Header';
import styles from './Page.module.scss';

const Page = ({ children, pageTitle }) => (
    <div className={styles['page']}>
        <div className={styles['page-border-top']} />
        <div className={styles['page-border-right']} />
        <div className={styles['page-border-bottom']} />
        <div className={styles['page-border-left']} />

        <div className={styles['page-container']}>
            <Header />
            <div className={styles['page-content']}>
                { pageTitle && <h1 className={styles['page-title']}>{pageTitle}</h1> }
                { children }
            </div>
        </div>
    </div>
);

export default Page;