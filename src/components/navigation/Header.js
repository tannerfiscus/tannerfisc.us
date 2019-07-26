import React from 'react';

import { Link } from '@reach/router';

import styles from './Header.module.scss';
import Text from '../text/Text';

const Header = () => (
    <header className={styles['header']}>
        <div className={styles['header-logo']}>
            <Link to="/">
                <Text bold className={styles['header-logo-text']}>
                    tf
                </Text>
            </Link>
        </div>
        <ul className={styles['header-nav']}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact/">Contact</Link>
            </li>
        </ul>
    </header>
);

export default Header;