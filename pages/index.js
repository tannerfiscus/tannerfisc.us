import 'isomorphic-fetch'
import Helmet from 'react-helmet'
import Link from 'next/link'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import { breakpointDesktopMaxPadded, breakpointMobile, gray1, gray2, gray3, gray4, gray7, gray8, transparentBorder } from '../constants/styles/variables';
import Heading from '../components/common/Heading'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'

const Home = () => (
    <Layout>

        <Helmet
            meta={ [
                { name: 'description', content: 'Hi, I\'m Tanner. I\'m a front-end developer and designer living in Pittsburgh, PA. I have a passion for building a better web.' },
                { property: 'og:title', content: 'Tanner Fiscus' },
                { property: 'og:description', content: 'Front-end developer and designer living in Pittsburgh, PA' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us' },
                { property: 'og:image', content: 'https://tannerfisc.us/static/images/og/home.jpg' }
            ] }
            title='Tanner Fiscus – Front-end Developer and Designer'
        />

        <Contain>
            <div className='title'>
                <BackdropTitle
                    backdrop='Front-end'
                    noPadding
                    title='Developer. Designer.'
                />
            </div>
        </Contain>

        <HighlightedSection>
            <div className='intro'>
                <div className='intro-img' />

                <div className='intro-text'>
                    <Heading size={3}>
                        Hi, I&#39;m Tanner.
                    </Heading>
                    <p>I&#39;m a front-end developer who is passionate about building a better web with beautiful experiences.</p>
                    <p>I specialize in Javascript development, particularly React.</p>
                    <p>I&#39;m currently working at Yelp in San Francisco.</p>
                </div>

            </div>
        </HighlightedSection>

        <style jsx>{`

            .title {
                align-items: center;
                display: flex;
                height: 16rem;
                margin-bottom: 1rem;
            }

            @supports (height: calc(50vh - 5.75rem)) {
                .title {
                    max-height: 16rem;
                    min-height: 8rem;
                    height: calc(50vh - 4.5rem);
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    .title {
                        height: calc(50vh - 5.75rem);
                    }
                }
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .title {
                    margin-bottom: 0;
                    max-height: 300rem;
                    padding: 6rem 0 8rem;
                }
            }

            h2 {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0 0 2rem;
            }

            p {
                color: ${gray8};
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                p {
                    line-height: 1.25rem;
                    font-size: 1.25rem;
                }
            }

            p + p {
                margin-top: 1rem;
            }

            .intro {
                margin: 0 auto;
                max-width: 86rem;
                position: static;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .intro {
                    align-items: center;
                    display: flex;
                    flex-direction: row-reverse;
                    height: 26rem;
                    height: calc(50vh - 5.75rem);
                    min-height: 16rem;
                }
            }

            .intro-img {
                background-image: url('/static/images/me.jpg');
                background-position: center;
                background-size: cover;
                height: 20rem;
                margin: -2rem 0 0 1rem;
                position: relative;
                z-index: 1;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .intro-img {
                    align-self: flex-start;
                    flex: 0 auto;
                    height: 24rem;
                    height: calc(100% + 4rem);
                    width: 40rem;
                    margin-top: -2rem;
                    -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
                    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
                }
            }

            .intro-text {
                padding: 0 2rem 2rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .intro-text {
                    flex: 1 auto;
                    padding: 0 2rem 2rem 0;
                }
            }
        `}</style>

    </Layout>
)

export default Home
