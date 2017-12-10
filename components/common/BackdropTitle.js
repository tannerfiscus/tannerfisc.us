import React from 'react'

import { gray7 } from '../../constants/styles/variables';


const BackdropTitle = ({ backdrop, title }) => (
    <h1>
        <div className='wrapper'>
            <span className='backdrop'>{ backdrop }</span>
            &nbsp;
            <span className='title'>{ title }</span>
        </div>

        <style jsx>{`
            h1 {
                font-size: 4rem;
                line-height: 1;
                padding: 3rem 0 6rem;
            }

            .backdrop {
                color: ${gray7};
                left: 0;
                font-size: 8rem;
                font-weight: 600;
                position: relative;
                z-index: 0;
            }

            .title {
                position: absolute;
                right: 0;
                top: 4rem;
                z-index: 1;
            }

            .wrapper {
                display: inline-block;
                padding: 0 4rem 0 0;
                position: relative;
            }
        `}</style>
    </h1>
)

export default BackdropTitle
