import React from 'react'

import Heading from '../../common/Heading'
import ResumeBullets from '../ResumeBullets'
import ResumeEmployer from '../ResumeEmployer'
import ResumeList from '../list/ResumeList'
import ResumeListContent from '../list/ResumeListContent'
import ResumeListItem from '../list/ResumeListItem'
import ResumeSection from '../ResumeSection'
import ResumeSkills from '../ResumeSkills'

const Experience = () => (

    <ResumeSection
        title='Experience'>

        <ResumeList>

            <ResumeListItem>

                <ResumeListContent left>

                    <ResumeEmployer
                        employer='yelp'
                        timeframe='June 2017 - Present'
                    />

                </ResumeListContent>


                <ResumeListContent right>

                    <ResumeListContent title>
                        Software Engineer (Javascript)
                    </ResumeListContent>

                    {/*<ResumeBullets
                        points={[]}
                    />*/}

                    <ResumeSkills
                        skills={[
                            'Javascript (ES6)',
                            'React',
                            'Redux',
                            'Jest',
                            'Enzyme',
                            'Eslint',
                            'Webpack',
                            'CSS Modules',
                            'SASS',
                            'HTML',
                            'npm',
                            'Yarn',
                            'Git',
                            'Jira',
                        ]}
                    />

                </ResumeListContent>

            </ResumeListItem>

            <ResumeListItem>

                <ResumeListContent left>

                    <ResumeEmployer
                        employer='niche'
                        timeframe='Aug 2015 - May 2017'
                    />

                </ResumeListContent>


                <ResumeListContent right>

                    <ResumeListContent title>
                        Front End Engineer
                    </ResumeListContent>

                    <ResumeBullets
                        points={[
                            'Collaborated with other front end engineers to forge a modern, scalable, cross-browser, mobile-first platform for niche.com, which went from prototype to production in 15 months.',
                            'Implemented a set of Javascript standards with other front end developers to create code uniformity.',
                            'Delivered reliable code quality by writing unit tests with Mocha and enzyme.',
                            'Efficiently implemented changes during QA and design review to ensure a timely completion of deliverables.',
                            'Worked with back-end developers to shape API responses to best fit front end implementation.',
                            'Researched best practices to independently design and build an internal web application for managing data.',
                        ]}
                    />

                    <ResumeSkills
                        skills={[
                            'Javascript (ES6)',
                            'React',
                            'Fluxible',
                            'Redux',
                            'Mocha',
                            'Enzyme',
                            'Eslint',
                            'Webpack',
                            'BEM',
                            'LESS',
                            'SASS',
                            'HTML',
                            'Node',
                            'Express',
                            'npm',
                            'Yarn',
                            'Git',
                            'Jira',
                        ]}
                    />

                </ResumeListContent>

            </ResumeListItem>

            <ResumeListItem>

                <ResumeListContent left>

                    <ResumeEmployer
                        employer='rmu'
                        timeframe='Dec 2014 - Aug 2015'
                    />

                </ResumeListContent>


                <ResumeListContent right>

                    <ResumeListContent title>
                        Lead User Experience Developer
                    </ResumeListContent>

                    <ResumeBullets
                        points={[
                            'Formed a new position to champion user experience for RMU’s website.',
                            'Researched, analyzed, and designed web patterns to improve UX within legacy web apps.',
                            'Assumed a greater responsibility of overseeing both internal and external websites, as well as designing and developing a mobile app.',
                        ]}
                    />

                    <ResumeSkills
                        skills={[
                            'HTML',
                            'SASS',
                            'Javascript',
                            'jQuery',
                            'Sketch',
                            'Photoshop',
                            'Google Analytics',
                        ]}
                    />

                </ResumeListContent>

            </ResumeListItem>

            <ResumeListItem>

                <ResumeListContent left>

                    <ResumeEmployer
                        employer='rmu'
                        timeframe='Aug 2013 - Dec 2014'
                    />

                </ResumeListContent>

                <ResumeListContent right>

                    <ResumeListContent title>
                        Associate Programmer Analyst
                    </ResumeListContent>

                    <ResumeBullets
                        points={[
                            'Worked with back-end developers to bring modern functionality and design to internal web applications.',
                            'Created, maintained, and enhanced code for internal webpages and custom applications while assisting with university-wide migration of content management systems (CMS).',
                            'Implemented an internal training program to provide documentation and conducted presentations on how to effectively use the new CMS.',
                        ]}
                    />

                    <ResumeSkills
                        skills={[
                            'HTML',
                            'CSS',
                            'Javascript',
                            'jQuery',
                            'SQL',
                            'PL/SQL',
                        ]}
                    />

                </ResumeListContent>

            </ResumeListItem>

        </ResumeList>

    </ResumeSection>

)

export default Experience
