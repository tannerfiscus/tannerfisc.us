import classnames from 'classnames'
import React from 'react'

import { breakpointMobile, gray4, gray7 } from '../../../constants/styles/variables'

const ResumeListContent = ({ children, description, left, right, skills, small, title }) => (
    <div className={classnames({
        'resume-list-content': true,
        'resume-list-content-description': description,
        'resume-list-content-small': small,
        'resume-list-content-left': left,
        'resume-list-content-right': right,
        'resume-list-content-title': title,
    })}>
        { children }

        <style jsx>{`
            .resume-list-content-description {
                line-height: 1em;
            }

            .resume-list-content-left {
                flex: 1 1 100%;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-list-content-left {
                    flex: 1 0 7rem;
                }

                .resume-list-content-right {
                    padding: 0 0 0 1.5rem;
                }
            }

            .resume-list-content-right {
                flex: 1 auto;
            }

            .resume-list-content-skills {
                padding: 1rem 0 0;
            }

            .resume-list-content-skills::before {
                content: 'Professional Skills';
                display: block;
                font-weight: 500;
                padding: 0 0 0.5rem;
            }

            .resume-list-content-skills li {
                background: ${gray7};
                border-radius: 3rem;
                display: inline-block;
                margin: 0 0.75rem 0.75rem 0;
                padding: 0.5rem 1rem 0.4rem;
            }

            .resume-list-content-small {
                color: ${gray4};
                font-size: 0.75em;
                font-weight: 700;
                line-height: 1em;
                margin: 0.3rem 0 0;
            }

            .resume-list-content-title {
                font-size: 1.4em;
                font-weight: 500;
                margin: 0 0 0.3rem;
            }
        `}</style>
    </div>
)

export default ResumeListContent
