import Helmet from 'react-helmet'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import { breakpointMedium, breakpointMobile, gray3, gray7 } from '../constants/styles/variables';
import Heading from '../components/common/Heading'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'
import Timeline from '../components/timeline/Timeline'
import timelineItems from '../constants/timeline-items';

const About = () => (
    <Layout>

        <Helmet
            meta={ [
                { name: 'description', content: 'View my experience, find out a little bit about me, and see why I have a passion for building a better web.' },
                { property: 'og:title', content: 'About Tanner Fiscus' },
                { property: 'og:description', content: `I'm passionate about building a better web` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/about/' },
                { property: 'og:image', content: 'https://tannerfisc.us/static/images/og/about-me.jpg' }
            ] }
            title='About Me – Tanner Fiscus'
        />

        <Contain>

            <BackdropTitle
                backdrop='Hi there'
                title="I'm Tanner"
            />
        </Contain>

        <HighlightedSection>
            <div className='passion'>
                I&#39;m passionate about building a better web.
            </div>
        </HighlightedSection>

        <div className='about-content'>

            <Contain>
                <p className='about-paragraph'>I'm a front-end developer who is working with an extraordinarily talented team building the future of Yelp in beautiful San Francisco, CA<br/><br/>React is my framework of choice. I am always learning something new and code in vanilla Javascript on the daily. I'm fluent in Javascript, CSS, and HTML.</p>
            </Contain>

            <HighlightedSection light>
                <Timeline items={timelineItems} />
            </HighlightedSection>

        </div>

        <style jsx>{`
            .about-content {
                background: ${gray7};
            }

            .about-paragraph {
                margin: 0 auto;
                max-width: ${breakpointMedium};
                padding: 4rem 2rem;
                font-size: 1.2rem;
                text-align: center;
            }

            .passion {
                font-size: 1.3rem;
                font-weight: bold;
                padding: 0 2rem;
                text-align: center;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .passion {
                    font-size: 1.6rem;
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                .passion {
                    font-size: 2.2rem;
                }
            }
        `}</style>

    </Layout>
);

export default About;
