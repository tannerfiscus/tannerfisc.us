import 'isomorphic-fetch'
import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

import { buildAPIUrl, buildProjectImageURL } from '../utils/url'
import Project from '../components/project/Project'

class PortfolioItem extends React.PureComponent {

    static async getInitialProps({ query }) {
        const projects = await import('../projects/all.js')
        const item = projects.default.find(project => project.id === query.id)
        return { item }
    }

    render() {
        return (
            <Fragment>

                <Helmet
    				meta={ [
    					{ name: 'description', content: `Discover the details about my design and build process for the ${ this.props.item.title } project.` },
    					{ property: 'og:title', content: this.props.item.title },
    					{ property: 'og:description', content: `Discover the process behind building and designing the ${this.props.item.title} project.` },
    					{ property: 'og:type', content: 'website' },
    					{ property: 'og:url', content: `https://tannerfisc.us/portfolio/${this.props.url.query.id}/` },
    					{ property: 'og:image', content: this.props.item.photos.cover ? buildProjectImageURL(this.props.item.photos.cover.url) : 'https://tannerfisc.us/static/images/og/portfolio.jpg' }
    				] }
    				title={ `${this.props.item.title} – Project by Tanner Fiscus` }
                />

                <Project item={this.props.item} />

            </Fragment>
        );
    }
}

export default PortfolioItem
