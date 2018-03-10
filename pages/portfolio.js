import 'isomorphic-fetch'

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
