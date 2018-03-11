import React from 'react';

import { breakpointMobile } from '../../../constants/styles/variables'

const ResumeListItem = ({ children }) => (
    <li className='resume-list-item'>
        { children }

        <style jsx>{`
            .resume-list-item {
                display: flex;
                flex-wrap: wrap;
            }

            .resume-list-item + .resume-list-item {
                padding: 2rem 0 0;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-list-item {
                    flex-wrap: nowrap;
                }
            }
        `}</style>
    </li>
)

export default ResumeListItem
