import 'isomorphic-fetch'
import dynamic from 'next/dynamic'
import Helmet from 'react-helmet'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import Loading from '../components/common/Loading';
import Layout from '../components/common/Layout'

const Portfolio = () => {

    const DynamicPortfolio = dynamic(
        import('../components/portfolio/DynamicPortfolio'),
        {
            loading: Loading,
            ssr: false,
        }
    )

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

                <DynamicPortfolio />

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

export default Portfolio
