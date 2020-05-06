import React from 'react';
import classNames from 'classnames';

import styles from './AboutExperience.module.scss';
import Text from '../Text';

const AboutExperience = ({ company, date, description, isDefaultExpanded, title }) => {
    const [isExpanded, setIsExpanded] = React.useState(isDefaultExpanded);

    return (
        <div className={classNames(styles.experience, {
            [styles.experienceExpanded]: isExpanded,
        })}>
            <Text className={styles.experienceDate}>
                { date }
            </Text>

            <Text bold className={styles.experiencePosition}>
                { title }
            </Text>

            <Text bold className={styles.experienceCompany}>
                @ { company }
            </Text>

            <div className={classNames(styles.experienceDescription, {
                [styles.experienceDescriptionExpanded]: isExpanded,
            })}>
                <p>{ description }</p>
            </div>

            <button className={classNames(styles.experienceToggle, {
                [styles.experienceToggleExpanded]: isExpanded,
            })} onClick={() => setIsExpanded(!isExpanded)}>
                <Text bold className={styles.experienceToggleMarker}>+</Text>
            </button>
        </div>
    )
};

AboutExperience.defaultProps = {
    isDefaultExpanded: false,
};

export default AboutExperience;