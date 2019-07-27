import React from 'react';

import AboutExperience from './AboutExperience';
import styles from './AboutExperiences.module.scss';

const AboutExperiences = () => (
    <div className={styles['experiences']}>
        <AboutExperience
            company="Yelp"
            date="JUNE 2017 - PRESENT"
            description="Helping connect people with great local businesses by building front-end tools with React."
            title="Software Engineer (JavaScript)"
            isDefaultExpanded
        />
        <AboutExperience
            company="Niche.com, Inc."
            date="AUGUST 2015 - MAY 2017"
            description="Helped shape the landscape for a more modern Niche.com, written fully in React."
            title="Front-end Engineer"
        />
        <AboutExperience
            company="Robert Morris University"
            date="DECEMBER 2014 - AUGUST 2015"
            description="Focused on building a more modern user experience of the intranet and public website using a mobile-first approach."
            title="Lead UX Developer"
        />
        <AboutExperience
            company="Robert Morris University"
            date="MAY 2015"
            description='After completing the "integrated" program at RMU, I obtained both my Masters of Science in Internet Information Systems and Bachelors of Science in Computer Information Systems.'
            title="Graduated 🎓"
        />
        <AboutExperience
            company="Robert Morris University"
            date="AUGUST 2013 - DECEMBER 2014"
            description="Worked closely with other developers to build modern web applications with a focus on design."
            title="Associate Programmer Analyst"
        />
    </div>
);

export default AboutExperiences;