import React from 'react'

import { breakpointMobile, breakpointMobileSmall, breakpointDesktop, breakpointDesktopMax, breakpointMedium, gray1 } from '../../constants/styles/variables'

const Cover = ({ image, title }) => (
	<section className='cover'>

		{ title &&
			<h1>{ title }</h1> }

		<div className='cover-bg' style={{ backgroundImage: `url(${image})` }} />

        <style jsx>{`
			.cover {
				margin: 0 0 3rem;
			}

			.cover-bg {
				background-color: ${gray1};
			    background-size: cover;
			    background-position: center center;
				display: block;
	            height: 14rem;
				margin: 0 0 0 1rem;
				position: relative;
				z-index: 1;
			}

			.cover-bg::before {
				background-color: ${gray1};
				bottom: -1rem;
				content: '';
				height: 1rem;
				left: 0;
				position: absolute;
				width: 100%;
			}

			.cover-bg::after {
				background-color: ${gray1};
				content: '';
				height: 100%;
				left: -1rem;
				position: absolute;
				top: 1rem;
				width: 1rem;
			}

			@media only screen and (min-width: ${breakpointMobileSmall}) {
                .cover-bg {
					height: 17rem;
                }
            }

			@media only screen and (min-width: ${breakpointMobile}) {
                .cover-bg {
    				box-shadow: 0 15px 30px rgba(24,24,24,0.15), 0 15px 12px rgba(24,24,24,0.15);
					height: 24rem;
					margin: 0;
                }

				.cover-bg::before, .cover-bg::after {
					display: none;
				}
            }

			@media only screen and (min-width: ${breakpointMedium}) {
                .cover-bg {
					height: 28rem;
                }
            }

			@media only screen and (min-width: ${breakpointDesktop}) {
                .cover-bg {
					height: 32rem;
                }
            }

            @media only screen and (min-width: ${breakpointDesktopMax}) {
            	.cover-bg {
            		margin: 0 auto;
            		max-width: 92rem;
            	}
			}

            h1 {
            	font-size: 1.8rem;
				font-weight: 400;
				line-height: 1;
				margin: 0 auto;
				max-width: ${breakpointDesktopMax};
            	padding: 2rem 1rem;
				text-align: center;
            }

			@media only screen and (min-width: ${breakpointMobileSmall}) {
				h1 {
					font-size: 2.75rem;
				}
			}

			@media only screen and (min-width: ${breakpointMobile}) {
				h1 {
					font-size: 3.5rem;
	            	padding: 2rem 2rem 4rem;
					text-align: left;
				}
			}

			@media only screen and (min-width: ${breakpointDesktop}) {
				h1 {
					font-size: 4rem;
	            	padding: 3rem 2rem 5rem;
				}
			}
        `}</style>

	</section>
)

export default Cover
