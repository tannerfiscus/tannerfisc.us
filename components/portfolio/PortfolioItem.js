import Link from 'next/link'
import React from 'react'

import { buildAPIStaticUrl } from '../../utils/url'
import Button from '../common/Button'
import { breakpointDesktop, breakpointMedium, breakpointMobile, gray2, gray7, transparentBorder } from '../../constants/styles/variables'
import Heading from '../common/Heading'

const PortfolioItem = ({ id, photo, tagline, text, title }) => (
    <li className='portfolio-item'>

        <Link
            as={`/portfolio/${id}`}
            href={`/portfolio-item?id=${id}`}
        >
            <div className='portfolio-item-content'>

                <div className='portfolio-item-image-wrapper'>
                    <img
                        className='portfolio-item-image'
                        src={buildAPIStaticUrl(photo)}
                    />
                </div>

                <Heading size={5}>
                    { title }
                </Heading>

                <p
                    className='portfolio-item-description'
    				dangerouslySetInnerHTML={{ __html: text }}
                />

                <Button block inverted>
                    Read more &rarr;
                </Button>
            </div>

        </Link>

        <style jsx>{`
            .portfolio-item {
                cursor: pointer;
                display: block;
                padding: 0 1rem 2rem;
                margin: 0 auto;
                max-width: 24rem;
                vertical-align: top;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .portfolio-item {
                    display: inline-block;
                    margin: 0;
                    width: 50%;
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                .portfolio-item {
                    width: 33.3333333333%;
                }
            }

            @media only screen and (min-width: ${breakpointDesktop}) {
                .portfolio-item {
                    width: 25%;
                }
            }

            .portfolio-item-content {
                border: 1px solid ${gray7};
                border-radius: 5px;
                box-shadow: 0;
                overflow: hidden;
                padding: 1rem;
                position: relative;
                transition: box-shadow 0.3s ease;
                will-change: box-shadow;
            }

            .portfolio-item-content:active {
                top: 1px;
            }

            .portfolio-item-content:active,
            :global(body:not(.touch-device)) .portfolio-item-content:hover {
                box-shadow: 0 0 8px ${transparentBorder};
                box-shadow: 0 15px 30px ${transparentBorder}, 0 15px 12px ${transparentBorder};
            }

            .portfolio-item-description {
                color: ${gray2};
                font-size: 1em;
                height: 8rem;
                line-height: 1.2em;
                margin: 0 0 1rem;
                overflow: hidden;
                padding: 0;
                position: relative;
            }

            .portfolio-item-description::after {
                background: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,1));
                bottom: 0;
                content: '';
                height: 5rem;
                left: 0;
                position: absolute;
                width: 100%;
            }

            .portfolio-item-image {
                border-radius: 5px;
                box-shadow: 0 0 8px ${transparentBorder};
                height: auto;
                position: relative;
                width: 100%
                z-index: 1;
            }

            .portfolio-item-image-wrapper {
                position: relative;
                margin: 0 0 1rem;
            }

            .portfolio-item-image-wrapper::before {
                background: ${gray7};
                content: '';
                height: 80%;
                left: -1rem;
                position: absolute;
                right: -1rem;
                top: -1rem;
                z-index: 0;
            }
        `}</style>

    </li>
)

export default PortfolioItem
