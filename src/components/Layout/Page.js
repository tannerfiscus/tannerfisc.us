import React from 'react';
import classnames from 'classnames';

import Header from '../Header';
import styles from './Layout.module.scss';

const Page = ({ children, pageTitle, transitionStatus, otherProps }) => {
    // For first page renders that aren't navigated by link click (browser load/refresh)
    const [isFirstPageRender, setFirstPageRender] = React.useState(!otherProps.entry.state.isLinkClick);

    React.useState(() => {
        if (!otherProps.entry.state.isLinkClick) {
            setTimeout(() => {
                setFirstPageRender(false);
            }, 100);
        }
    }, []);

    return (
        <div className={classnames({
            [styles.pageTransitionEnterActive]: isFirstPageRender || transitionStatus === 'entering',
            [styles.pageTransitionEnter]: !isFirstPageRender && transitionStatus === 'entered',
            [styles.pageTransitionExitActive]: transitionStatus === 'exiting',
            [styles.pageTransitionExit]: transitionStatus === 'exited',
        })}>
            <div className={styles['page']}>
                <div className={styles['pageBorderTop']} />
                <div className={styles['pageBorderRight']} />
                <div className={styles['pageBorderBottom']} />
                <div className={styles['pageBorderLeft']} />

                <div className={styles['pageContainer']}>
                    <Header />
                    <div className={styles['pageContent']}>
                        { pageTitle && <h1 className={styles['pageTitle']}>{pageTitle}</h1> }
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
