import React from 'react';

import AboutExperience from './AboutExperience';
import styles from './AboutExperiences.module.scss';

const AboutExperiences = ({ experiences }) => (
    <div className={styles['experiences']}>
        {
            experiences.map(({ experience }, i) => (
                <AboutExperience
                    company={experience.name}
                    date={experience.timeline}
                    description={experience.description}
                    key={experience.timeline}
                    title={experience.title}
                    isDefaultExpanded={i === 0}
                />
            ))
        }
    </div>
);

export default AboutExperiences;