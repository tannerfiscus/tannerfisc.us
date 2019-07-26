import React from 'react';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => (
    <div className={styles['loading-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default LoadingSpinner;