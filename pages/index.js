import 'isomorphic-fetch'
import Link from 'next/link'
import React from 'react'

import Contain from '../components/common/Contain'
import { breakpointDesktopMaxPadded, gray1, gray2, gray3, gray4, gray7, gray8, transparentBorder } from '../constants/styles/variables';
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
                    <h1>
                        <span className='backdrop'>Front-end</span> <span className='forefront'>Developer. Designer.</span>
                    </h1>
                </Contain>

                <div className='intro'>
                    <div className='intro-contain'>
                        <div className='intro-img' />

                        <div className='intro-text'>
                            <p>I&#39;m a front-end developer who is passionate about building a better web with beautiful experiences.</p>
                            <p>I specialize in Javascript development, particularly React.</p>
                            <p>I&#39;m currently working at Yelp in San Francisco.</p>
                        </div>

                    </div>
                </div>

                <div className='timeline'>
                    <Timeline items={this.props.timeline} />
                </div>

                <style jsx>{`
                    h1 {
                        font-size: 4rem;
                        line-height: 1;
                        padding: 12rem 0 8rem 4rem;
                        padding: 16vh 0 12rem 4rem;
                        position: relative;
                    }

                    .backdrop {
                        color: ${gray7};
                        left: 0;
                        margin: -7rem 0 0;
                        position: absolute;
                        top: 50%;
                        font-size: 8rem;
                        font-weight: 600;
                        z-index: 0;
                    }

                    .forefront {
                        position: relative;
                        z-index: 1;
                    }

                    h2 {
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin: 0 0 2rem;
                    }

                    p {
                        color: ${gray8};
                        line-height: 1.25rem;
                        font-size: 1.25rem;
                    }

                    p + p {
                        margin-top: 1rem;
                    }

                    .intro {
                        background: ${gray1};
                        height: 24rem;
                        margin: 0 0 0 2rem;
                        position: relative;
                    }

                    .intro-contain {
                        align-items: center;
                        display: flex;
                        height: 100%;
                        margin: 0 auto 0 0;
                        max-width: 86rem;
                        position: static;
                    }

                    .intro-img {
                        align-self: flex-start;
                        background-image: url('/static/images/me.jpg');
                        background-position: center;
                        background-size: cover;
                        border-radius: 3px;
                        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
                        height: 24rem;
                        position: absolute;
                        right: 2rem;
                        top: -4rem;
                        z-index: 1;
                        width: 24rem;
                    }

                    .intro-text {
                        padding: 0 30rem 0 2rem;
                    }

                    .timeline {
                        padding: 4rem 0 6rem;
                    }

                    @media (min-width: ${breakpointDesktopMaxPadded}) {
                        .intro {
                            margin: 0 0 0 auto;
                            width: calc(100vw - ((100vw - ${breakpointDesktopMaxPadded}) / 2) - 2rem);
                        }

                        .intro-contain {
                            position: relative;
                        }

                        .intro-img {
                            right: 0;
                        }
                    }
                `}</style>

            </Layout>
        )
    }

};

export default Home;
