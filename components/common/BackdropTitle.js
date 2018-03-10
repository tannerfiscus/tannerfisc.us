import classnames from 'classnames'
import React from 'react'

import { breakpointMedium, breakpointMobile, breakpointMobileSmall, gray7 } from '../../constants/styles/variables';


const BackdropTitle = ({ backdrop, noPadding, title }) => (
    <h1 className={classnames({ 'no-padding': noPadding })}>
        <div className='wrapper'>
            <span className='backdrop'>{ backdrop }</span>
            <span className='space'>&nbsp;</span>
            <span className='title'>{ title }</span>
        </div>

        <style jsx>{`
            h1 {
                font-size: 1.8rem;
                line-height: 1;
                padding: 4rem 0 6rem;
                text-align: center;
                width: 100%;
            }

            h1.no-padding {
                padding: 0;
            }

            @media only screen and (min-width: ${breakpointMobileSmall}) {
                h1 {
                    font-size: 2.75rem;
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                h1 {
                    font-size: 3.5rem;
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                h1 {
                    font-size: 4rem;
                }
            }
            .space {
                display: none;
            }

            .backdrop {
                color: ${gray7};
                left: 0;
                font-size: 3rem;
                font-weight: 600;
                position: relative;
                z-index: 0;
            }

            @media only screen and (min-width: ${breakpointMobileSmall}) {
                .backdrop {
                    font-size: 4.5rem;
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .backdrop {
                    font-size: 6rem;
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                .backdrop {
                    font-size: 8rem;
                }
            }

            .title {
                display: block;
                position: relative;
                top: -1rem;
                z-index: 1;
            }

            @media only screen and (min-width: ${breakpointMobileSmall}) {
                .title {
                    top: -2rem;
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .title {
                    top: -2.75rem;
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                .title {
                    top: -3.5rem;
                }
            }

            .wrapper {
                display: block;
                position: relative;
            }
        `}</style>
    </h1>
)

export default BackdropTitle
