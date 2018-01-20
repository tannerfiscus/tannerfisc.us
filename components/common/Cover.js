import React from 'react'

import { breakpointMobile, breakpointDesktop, breakpointDesktopMax, gray1 } from '../../constants/styles/variables'

const Cover = ({ image, title }) => (
	<section className='cover' style={{ backgroundImage: `url(${image})` }}>

		{ title &&
			<h1>{ title }</h1> }

        <style jsx>{`
            .cover {
            	align-items: center;
            	background-color: ${gray1};
            	background-size: cover;
            	background-position: center center;
            	display: flex;
            	height: 20rem;
            	margin: -2.75rem 0 0 1rem;
            	max-height: 60vh;
            	max-width: 95%;
                max-width: calc(100% - 1rem);
            	min-height: 20rem;
            	padding: 2rem 4rem;
            	position: relative;
            	transition: height 0.4s linear;
            }

            h1 {
            	background: rgba(29, 31, 32, 0.97);
            	bottom: 1.5rem;
                border-radius: 0 4px 4px 0;
            	color: #fff;
            	font-size: 2.25rem;
                left: -1rem;
            	margin: 0;
            	padding: 1rem 2rem;
            	position: absolute;
            	width: auto;
            	z-index: 1;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .cover {
                    height: 30rem;
            		margin: -0.75rem 0 0 2rem;
            		max-width: calc(100vw - 2rem);
                }

        		h1 {
            		bottom: 2rem;
        			font-size: 3rem;
        			left: -2rem;
        		}
            }

            @media only screen and (min-width: ${breakpointDesktop}) {
            	.cover {
            		height: 34rem;
            	}

            	.h1 {
        			font-size: 3.8rem;
        		}
            }

            @media only screen and (min-width: ${breakpointDesktopMax}) {
            	.cover {
            		height: 36rem;
            		margin: -0.75rem auto 0;
            		width: ${breakpointDesktopMax};
            	}

                h1 {
                    border-radius: 4px;
                }
            }
        `}</style>

	</section>
)

export default Cover
