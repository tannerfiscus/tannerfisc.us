import 'isomorphic-fetch'
import Helmet from 'react-helmet'
import React from 'react'

import { buildAPIUrl } from '../utils/url'
import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import Layout from '../components/common/Layout'
import PortfolioItem from '../components/portfolio/PortfolioItem'

class Portfolio extends React.PureComponent {

    static async getInitialProps() {
        const res = await fetch(buildAPIUrl('/portfolio/'))
        const json = await res.json()
        return { portfolio: json }
    }

    render() {
        return (
            <Layout>

                <Helmet
                    meta={ [
                        { name: 'description', content: 'Travel through time and catch a glimpse of the work that I\'ve developed over the years.' },,
                        { property: 'og:title', content: 'My Work' },
                        { property: 'og:description', content: 'Online portfolio showcasing experiences built and designed by Tanner Fiscus' },
                        { property: 'og:type', content: 'website' },
                        { property: 'og:url', content: 'https://tannerfisc.us/portfolio/' },
                        { property: 'og:image', content: 'https://tannerfisc.us/static/images/og/portfolio.jpg' }
                    ] }
                    title='My Work – Experiences Built and Designed by Tanner Fiscus'
                />

                <Contain>

                    <BackdropTitle
                        backdrop='Portfolio'
                        title='View My Work'
                    />

                    <ul className='portfolio-items'>
                        {
                            this.props.portfolio.map(item => (
                                <PortfolioItem
                                    key={item.id}
                                    id={item.id}
                                    photo={item.photo}
                                    tagline={item.tagline}
                                    text={item.text}
                                    title={item.title}
                                />
                            ))
                        }
                    </ul>
                </Contain>

                <style jsx>{`
                    .portfolio-items {
                        display: block;
                        margin: 0 -1rem;
                    }
                `}</style>

            </Layout>
        )
    }

}

export default Portfolio
