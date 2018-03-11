import React   from 'react'

import { breakpointMobile } from '../../constants/styles/variables'
import Heading from '../common/Heading'

const ResumeHeader = () => (
    <figure className='resume-header'>

        <div className='resume-header-image' />

        <figcaption>
            <Heading size={1}>
                <span className='heading'>Hi, I&#39;m Tanner</span>
            </Heading>
        </figcaption>

        <style jsx>{`
            .resume-header {
                border: 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 0;
                padding: 0 1em;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-header {
                    align-items: center;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                }
            }

            figcaption {
                flex: 1 auto;
                padding: 1rem 0 0;
                text-align: center;
                width: 100%;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                figcaption {
                    padding: 0 0 0 2rem;
                    text-align: left;
                }
            }

            .heading {
                line-height: 1;
                margin: 0.75rem 0 0;
                padding: 0;
            }

            .resume-header-image {
                background-image: url('/static/images/me-coffee-into-code.jpg');
                background-position: top left;
                background-position-x: -1.6rem;
                background-size: 12rem auto;
                border-radius: 50%;
                flex: 0 auto;
                height: 8rem;
                width: 8rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-header-image {
                    flex: 1 0 8rem;
                }
            }
        `}</style>

    </figure>
)

export default ResumeHeader
