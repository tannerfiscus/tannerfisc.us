import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

import { breakpointMobile, fontFamily, gray1, gray2, gray6, gray7, gray8 } from '../../constants/styles/variables'

const Button = ({ block, children, deflate, href, inflate, inverted, mobile, onClick }) => {

    const handleClick = (e) => {
        if (typeof onClick === 'function') {
            e.preventDefault()
            onClick()
        }
    }

    const ButtonElement = (
        <button
            className={classnames({
                'button': true,
                'button-block': block,
                'button-deflate': deflate,
                'button-inflate': inflate,
                'button-inverted': inverted,
                'button-mobile': mobile,
            })}
            onClick={handleClick}
        >
            { children }

            <style jsx>{`
                .button,
                a.button {
                	-webkit-appearance: none;
                	background-color: ${gray1};
                	border: 0;
                	border-radius: 5px;
                	box-shadow: none;
                	color: ${gray8};
                	cursor: pointer;
                	display: inline-block;
                	font-family: ${fontFamily};
                	font-size: 0.95em;
                	padding: 0 1.8rem;
                	position: relative;
                	left: 0;
                	line-height: 2.7em;
                	outline: none;
                	text-align: center;
                	top: 0;
                	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                }

                :global(body:not(.touch-device)) .button:hover {
                    background-color: ${gray2};
                    color: ${gray8};
                }

                .button:active {
                    left: 1px;
                    top: 1px;
                }

                .button-block,
                .button-mobile {
                	display: block;
                	width: 100%;
                }

                .button-inverted,
                a.button-inverted {
                	background-color: ${gray7};
                	color: ${gray2};
                }

                :global(body:not(.touch-device)) .button-inverted:hover {
                    background-color: ${gray6};
                    color: ${gray2};
                }

                .button-inflate,
                a.button-inflate {
                	font-size: 1.3em;
                	line-height: 1em;
                	padding: 1rem 2.2rem 0.8rem;
                }

                .button-deflate,
                a.button-deflate {
                	font-size: 0.7em;
                	line-height: 2rem;
                	padding: 0 1rem;
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    .button-mobile {
                        display: inline-block;
                        width: auto;
                    }
                }
            `}</style>
        </button>
    )

    if (href) {
        return (
            <Link href={href}>
                { ButtonElement }
            </Link>
        )
    }

    return ButtonElement
}

export default Button
