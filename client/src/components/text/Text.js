import React from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

const Text = ({ bold, children, className }) => (
    <span className={classNames({
        [styles['typeface-bold']]: bold,
        [className]: !!className,
    })}>
        { children }
    </span>
);

Text.defaultProps = {
    bold: false,
    className: '',
};

export default Text;