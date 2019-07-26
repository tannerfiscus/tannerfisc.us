import React from 'react';

import { Link } from '@reach/router';

import styles from './Header.module.scss';
import Text from '../text/Text';

const Header = () => (
    <header className={styles['header']}>
        <Text bold className={styles['header-logo']}>
            tf
        </Text>
        <ul className={styles['header-nav']}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/contact/">Contact</Link>
            </li>
            <li>
                <Link to="/portfolio/">Portfolio</Link>
            </li>
        </ul>
    </header>
);

export default Header;