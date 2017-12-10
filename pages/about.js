import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import { gray7 } from '../constants/styles/variables';
import Heading from '../components/common/Heading'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'
import Timeline from '../components/timeline/Timeline'

class About extends React.PureComponent {

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

                    <BackdropTitle
                        backdrop='Hi there'
                        title="I'm Tanner"
                    />
                </Contain>

                <HighlightedSection>
                    <div className='passion'>
                        <Heading size={2}>
                            I&#39;m passionate about building a better web.
                        </Heading>
                    </div>
                </HighlightedSection>

                <div className='about-content'>

                    <Contain>
                        <br/><br/><br/><br/>
                        Chat about myself ...
                        <br/><br/><br/><br/>
                    </Contain>

                    <HighlightedSection light>
                        <Timeline items={this.props.timeline} />
                    </HighlightedSection>

                </div>

                <style jsx>{`
                    .about-content {
                        background: ${gray7};
                    }

                    .passion {
                        text-align: center;
                    }
                `}</style>

            </Layout>
        )
    }

}

export default About;
