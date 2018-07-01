import React from 'react'

import Button from '../common/Button'
import { breakpointMobile } from '../../constants/styles/variables'

const ContactButtons = () => {
    return (
        <section>

            <a className='in' href="https://www.linkedin.com/in/tannerfiscus" target="_blank">
                 Connect on LinkedIn <img src='/static/images/in.png' />
            </a>

            <a className='twitter' href="https://twitter.com/messages/compose?recipient_id=352814979" target="_blank">
                Message on Twitter <img src='/static/images/twitter.png' />
            </a>

            <a className='messenger' href="https://m.me/tanner.fiscus" target="_blank">
                Chat on Messenger <img src='/static/images/messenger.svg' />
            </a>

            <style jsx>{`
                a {
                    border: 0;
                    border-radius: 5px;
                    color: #fff;
                    display: block;
                	font-size: 1.15rem;
                	line-height: 2.7rem;
                    opacity: 1;
                    padding: 0.5rem 4rem;
                	text-align: center;
                    transform: translateY(0);
                	transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    a {
                	   font-size: 1.5rem;
                    }
                }

                :global(body:not(.touch-device)) a:hover,
                a:hover {
                    color: #fff;
                    border: none;
                    opacity: 0.9;
                    text-decoration: none;
                    transform: translateY(-2px);
                }

                a img {
                    height: 1.5rem;
                    margin: 0 0 0 0.35rem;
                    position: relative;
                    top: 0.3rem;
                    width: 1.5rem;
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    a img {
                        height: 2rem;
                        top: 0.45rem;
                        width: 2rem;
                    }
                }

                a.messenger img {
                    margin-left: 0.15rem;
                }

                a + a {
                    margin: 2rem 0 0;
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    a + a {
                        margin-top: 3rem;
                    }
                }

                .in {
                    background: #0077B5;
                }

                .messenger {
                    background: #2998ff;
                }

                .twitter {
                    background: #1da1f2;
                }
            `}</style>

        </section>
    )
}

export default ContactButtons
