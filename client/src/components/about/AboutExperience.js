import React from 'react';
import classNames from 'classnames';

import styles from './AboutExperience.module.scss';
import Text from '../text/Text';

const AboutExperience = ({ company, date, description, isDefaultExpanded, title }) => {
    const [isExpanded, setIsExpanded] = React.useState(isDefaultExpanded);

    return (
        <div className={classNames({
            [styles['experience']]: true,
            [styles['experience--expanded']]: isExpanded,
        })}>
            <Text className={styles['experience-date']}>
                { date }
            </Text>

            <Text bold className={styles['experience-position']}>
                { title }
            </Text>

            <Text bold className={styles['experience-company']}>
                @ { company }
            </Text>

            <div className={classNames({
                [styles['experience-description']]: true,
                [styles['experience-description--expanded']]: isExpanded,
            })}>
                <p>{ description }</p>
            </div>

            <button className={classNames({
                [styles['experience-toggle']]: true,
                [styles['experience-toggle--expanded']]: isExpanded,
            })} onClick={() => setIsExpanded(!isExpanded)}>
                <Text bold className={styles['experience-toggle-marker']}>+</Text>
            </button>
        </div>
    )
};

AboutExperience.defaultProps = {
    isDefaultExpanded: false,
};

export default AboutExperience;