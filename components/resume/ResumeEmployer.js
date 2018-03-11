import React from 'react';

import { breakpointMobile, gray7 } from '../../constants/styles/variables'
import ResumeListContent from './list/ResumeListContent'

const EmployerNames = {
    niche: 'Niche.com',
    rmu: 'Robert Morris University',
    yelp: 'Yelp',
};

const ResumeListEmployer = ({ employer, timeframe }) => (
    <div className={`resume-employer resume-employer-${employer}`}>

        <ResumeListContent small>
            { timeframe }
        </ResumeListContent>

        <h5>{ EmployerNames[employer] }</h5>

        <style jsx>{`
            .resume-employer {
                position: relative;
            }

            .resume-employer::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-employer::after {
                    left: 0;
                    right: auto;
                    top: 100%;
                }
            }

            .resume-employer-niche::after {
                background: url('/static/images/employers/niche.png');
                background-size: cover;
                height: 2.6rem;
                width: 3.7rem;
            }

            .resume-employer-rmu::after {
                background: url('/static/images/employers/rmu.png');
                background-size: cover;
                height: 2rem;
                width: 4.2rem;
            }

            .resume-employer-yelp::after {
                background: url('/static/images/employers/yelp.png');
                background-size: cover;
                height: 2.2rem;
                width: 4.2rem;
            }

            h5 {
                font-size: 1em;
                line-height: 1em;
                margin: 0;
                padding: 0.25rem 0 1rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                h5 {
                    padding: 1rem 0;
                }
            }
        `}</style>
    </div>
)

export default ResumeListEmployer
