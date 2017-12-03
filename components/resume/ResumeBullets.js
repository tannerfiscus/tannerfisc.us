import React from 'react';

import { gray4 } from '../../constants/styles/variables'

const ResumeListBullets = ({ points }) => (
    <ul>
    {
        points.map((point, i) => (
            <li key={i}>
                { point }
            </li>
        ))
    }

        <style jsx>{`
            li {
                padding: 0 0 0 1rem;
                position: relative;
            }

            li::before {
                border: 1px solid ${gray4};
                border-radius: 50%;
                height: 0.4rem;
                content: '';
                left: 0;
                position: absolute;
                top: 0.3rem;
                width: 0.4rem;
            }

            li + li {
                margin: 0.4rem 0 0;
            }
        `}</style>
    </ul>
)

export default ResumeListBullets
