import React from 'react';

import LinkTransition from '../LinkTransition';
import styles from './Header.module.scss';
import Text from '../Text';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerLogo}>
            <LinkTransition to="/">
                <Text bold className={styles.headerLogoText}>
                    tf
                </Text>
            </LinkTransition>
        </div>
        <ul className={styles.headerNav}>
            <li>
                <LinkTransition to="/">Home</LinkTransition>
            </li>
            <li>
                <LinkTransition to="/about/">About</LinkTransition>
            </li>
            <li>
                <LinkTransition to="/portfolio/">Portfolio</LinkTransition>
            </li>
            <li>
                <LinkTransition to="/contact/">Contact</LinkTransition>
            </li>
        </ul>
    </header>
);

export default Header;