import React from 'react'

import { breakpointMobile, breakpointMobileSmall, gray7 } from '../../constants/styles/variables';


const BackdropTitle = ({ backdrop, title }) => (
    <h1>
        <div className='wrapper'>
            <span className='backdrop'>{ backdrop }</span>
            &nbsp;
            <span className='title'>{ title }</span>
        </div>

        <style jsx>{`
            h1 {
                font-size: 1.8rem;
                line-height: 1;
                padding: 3rem 0 6rem;
            }

            @media only screen and (min-width: ${breakpointMobileSmall}) {
                h1 {
                    font-size: 2.75rem;
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                h1 {
                    font-size: 4rem;
                }
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
                    font-size: 8rem;
                }
            }

            .title {
                position: absolute;
                left: 2rem;
                top: 1.75rem;
                z-index: 1;
            }

            @media only screen and (min-width: ${breakpointMobileSmall}) {
                .title {
                    top: 2.5rem;
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .title {
                    left: auto;
                    right: 0;
                    top: 4rem;
                }
            }

            .wrapper {
                display: block;
                position: relative;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .wrapper {
                    display: inline-block;
                    padding: 0 4rem 0 0;
                }
            }
        `}</style>
    </h1>
)

export default BackdropTitle
