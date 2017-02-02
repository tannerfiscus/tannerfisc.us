import APIError		 	        from '../../APIError'
import { buildProjectImageURL } from '../../../utils/url'
import { getPortfolioItem }     from '../../../utils/portfolio'
import Helmet 	                from 'react-helmet'
import Loading		            from '../../foundation/Loading'
import NotFound      		    from '../../NotFound'
import ProjectContent 	        from './ProjectContent'
import React 			        from 'react'

class Project extends React.Component {

	static loadProps({ params: { itemId } }, cb) {

		getPortfolioItem(itemId)
			.then(data => {
				cb(null, {
					portfolioItem: {
						data,
						error: false,
						notFound: false
					}
				})
			})
			.catch(err => {
				const notFound = err.status && err.status === 404
				const error = notFound ? false : true

				cb(null, {
					portfolioItem: {
						data: {},
						error,
						notFound
					}
				})
			})
	 }

	render() {

		const { itemId } = this.props.params
		const { data, error, notFound } = this.props.portfolioItem
		const isLoading = Object.keys(data).length < 1 && !error

		if (!!notFound) { return <NotFound /> }

		if (error) { return <APIError content='this page' /> }

		return (
			<section className="page-portfolio-item">

			<Helmet
				meta={ [
					{ name: 'description', content: `Discover the details about my design and build process for the ${ data.meta.name } project.` },
					{ property: 'og:title', content: data.meta.name },
					{ property: 'og:description', content: `Discover the process behind building and designing the ${data.meta.name} project.` },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:url', content: `https://tannerfisc.us/portfolio/${itemId}/` },
					{ property: 'og:image', content: data.photos.cover ? buildProjectImageURL(data.photos.cover.url) : 'https://tannerfisc.us/static/og/portfolio.jpg' }
				] }
				title={ `${data.meta.name} – Project Details` } />

				{ isLoading && <Loading /> }

				{ !isLoading &&
					<ProjectContent
						data={ data } /> }

			</section>
		)
	}

}

export default Project
