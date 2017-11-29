import React           from 'react'
import ResumeSection   from '../ResumeSection'

const Experience = () => (

    <ResumeSection
        title='Experience'>

        <ul className='resume-list'>

            <li className='resume-list-item'>

                <div className='resume-list-item-left'>

                    <div className='resume-list-item-employer niche'>
                        <p className='resume-list-item-small'>Aug 2015 - Present</p>
                        <h5>Niche.com</h5>
                    </div>

                </div>


                <div className='resume-list-item-right'>

                    <h4 className='resume-list-item-title'>Front End Engineer</h4>
                    <ul className='resume-list-item-bullets'>
                        <li>Collaborated with other front end engineers to forge a modern, scalable, cross-browser, mobile-first platform for niche.com, which went from prototype to production in 15 months.</li>
                        <li>Implemented a set of Javascript standards with other front end developers to create code uniformity.</li>
                        <li>Delivered reliable code quality by writing unit tests with Mocha and enzyme, covering over 40% of the codebase.</li>
                        <li>Efficiently implemented changes during QA and design review to ensure a timely completion of deliverables.</li>
                        <li>Worked with back-end developers to shape API responses to best fit front end implementation.</li>
                        <li>Researched best practices to independently design and build an internal web application for managing data.</li>
                    </ul>

                    <ul className='resume-list-item-skills'>
                        <li>Javascript (ES6)</li>
                        <li>React</li>
                        <li>fluxible</li>
                        <li>redux</li>
                        <li>Mocha</li>
                        <li>Enzyme</li>
                        <li>Eslint</li>
                        <li>Webpack</li>
                        <li>BEM</li>
                        <li>LESS</li>
                        <li>SASS</li>
                        <li>HTML</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>npm</li>
                        <li>Yarn</li>
                        <li>Git</li>
                        <li>Jira</li>
                    </ul>

                </div>

            </li>

            <li className='resume-list-item'>

                <div className='resume-list-item-left'>

                    <div className='resume-list-item-employer rmu'>
                        <p className='resume-list-item-small'>Dec 2014 - Aug 2015</p>
                        <h5>Robert Morris University</h5>
                    </div>

                </div>


                <div className='resume-list-item-right'>

                    <h4 className='resume-list-item-title'>Lead User Experience Developer</h4>
                    <ul className='resume-list-item-bullets'>
                        <li>Formed a new position to champion user experience for RMU’s website.</li>
                        <li>Researched, analyzed, and designed web patterns to improve UX within legacy web apps.</li>
                        <li>Assumed a greater responsibility of overseeing both internal and external websites, as well as designing and developing a mobile app.</li>
                    </ul>

                    <ul className='resume-list-item-skills'>
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>Sketch</li>
                        <li>Photoshop</li>
                        <li>Google Analytics</li>
                    </ul>

                </div>

            </li>

            <li className='resume-list-item'>

                <div className='resume-list-item-left'>

                    <div className='resume-list-item-employer rmu'>
                        <p className='resume-list-item-small'>Aug 2013 - Dec 2014</p>
                        <h5>Robert Morris University</h5>
                    </div>

                </div>


                <div className='resume-list-item-right'>

                    <h4 className='resume-list-item-title'>Associate Programmer Analyst</h4>
                    <ul className='resume-list-item-bullets'>
                        <li>Worked with back-end developers to bring modern functionality and design to internal web applications.</li>
                        <li>Created, maintained, and enhanced code for internal webpages and custom applications while assisting with university-wide migration of content management systems (CMS).</li>
                        <li>Implemented an internal training program to provide documentation and conducted presentations on how to effectively use the new CMS.</li>
                    </ul>

                    <ul className='resume-list-item-skills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>SQL</li>
                        <li>PL/SQL</li>
                    </ul>

                </div>

            </li>

        </ul>

    </ResumeSection>

)

export default Experience
