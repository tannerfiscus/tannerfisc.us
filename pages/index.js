import 'isomorphic-fetch'
import Link from 'next/link'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import { breakpointDesktopMaxPadded, breakpointMobile, gray1, gray2, gray3, gray4, gray7, gray8, transparentBorder } from '../constants/styles/variables';
import Heading from '../components/common/Heading'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'
import Timeline from '../components/timeline/Timeline'

class Home extends React.Component {

    static async getInitialProps() {
        try {
            const res = await fetch('http://localhost:8080/static/json/timeline-items.json')
            const json = await res.json()
            return { timeline: json }
        } catch(err) {
            return {};
        }
    }

    render() {
        return (
            <Layout>

                <Contain>
                    <div className='title'>
                        <BackdropTitle
                            backdrop='Front-end'
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

                <div className='timeline'>
                    <HighlightedSection light>
                        <Timeline items={this.props.timeline} />
                    </HighlightedSection>
                </div>

                <style jsx>{`

                    .title {
                        padding: 2rem 0 3rem;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .title {
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
                        margin: 0 auto 0 0;
                        max-width: 86rem;
                        position: static;
                        text-align: center;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .intro {
                            align-items: center;
                            display: flex;
                            flex-direction: row-reverse;
                            height: 20.5rem;
                        }
                    }

                    .intro-img {
                        background-image: url('/static/images/me.jpg');
                        background-position: center;
                        background-size: cover;
                        border-radius: 3px;
                        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
                        height: 18rem;
                        margin: -4rem auto 0;
                        max-width: 18rem;
                        position: relative;
                        width: 80%;
                        width: calc(100vw - 2rem);
                        z-index: 1;
                    }

                    @supports (height: calc(100vw - 2rem)) and (width: calc(100vw - 2rem)) {
                        .intro-img {
                            height: calc(100vw - 2rem);
                            width: calc(100vw - 2rem);
                        }
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .intro-img {
                            align-self: flex-start;
                            flex: 0 auto;
                            height: 24rem;
                            min-width: 20rem;
                            width: 24rem;
                        }
                    }

                    .intro-text {
                        padding: 0 1rem 2rem;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .intro-text {
                            flex: 1 auto;
                            padding: 0 2rem 2rem 0;
                        }
                    }

                    .timeline {
                        padding: 2rem 0 4rem;
                    }
                `}</style>

            </Layout>
        )
    }

};

export default Home;
