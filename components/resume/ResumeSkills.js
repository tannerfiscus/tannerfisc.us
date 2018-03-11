import React from 'react';

import { gray7 } from '../../constants/styles/variables'

const ResumeListSkills = ({ skills }) => (
    <ul>
    {
        skills.map((skill, i) => (
            <li key={i}>
                { skill }
            </li>
        ))
    }

        <style jsx>{`
            ul {
                padding: 1rem 0 0;
            }

            ul::before {
                content: 'Professional Skills';
                display: block;
                font-weight: 500;
                padding: 0 0 0.5rem;
            }

            li {
                background: ${gray7};
                border-radius: 3rem;
                display: inline-block;
                margin: 0 0.75rem 0.75rem 0;
                padding: 0.5rem 1rem 0.4rem;
            }
        `}</style>
    </ul>
)

export default ResumeListSkills
