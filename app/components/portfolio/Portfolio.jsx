import APIError		 	from '../APIError.jsx';
import Cover	   	    from '../Cover.jsx';
import { getPortfolio } from '../../utils/portfolio';
import Helmet 	        from 'react-helmet'
import Loading		    from '../foundation/Loading.jsx';
import PageContent 	    from '../foundation/PageContent.jsx';
import React 		    from 'react';

class Portfolio extends React.Component {
	static loadProps(params, cb) {
		getPortfolio()
			.then((items) => {
				cb(null, {
					portfolio: {
						error: false,
						items
					}
				})
			})
			.catch(err => {
				cb(null, {
					portfolio: {
						error: true,
						items: []
					}
				})
			});
	 }

	render() {
		const { error, items } = this.props.portfolio

		return (
			<section className="page-portfolio">

				<Helmet
					meta={ [
						{ name: 'description', content: 'Travel through time and catch a glimpse of the work that I\'ve developed over the years.' },,
						{ property: 'og:title', content: 'My Work' },
						{ property: 'og:description', content: 'Online portfolio showcasing experiences built and designed by Tanner Fiscus' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:url', content: 'https://tannerfisc.us/portfolio/' },
						{ property: 'og:image', content: 'https://tannerfisc.us/static/og/portfolio.jpg' }
					] }
					title='My Work – Experiences Built and Designed by Tanner Fiscus' />

				<Cover
					backgroundImage="/static/portfolio-graphic.jpg"
					title="My Work" />

				<PageContent>

					{ (items.length < 1 && !error) &&
							<Loading /> }

					{ error && <APIError content='my portfolio' /> }

					<section className="portfolio">
						{ items.length > 0 &&
							this.renderItems(items) }
					</section>

				</PageContent>

			</section>
		);
	}

	renderItems(items) {
		return items.map((item) => {
			return (
				<figure className="portfolio-list-item" key={item.url}>
					<a className="portfolio-list-item-link" href={item.url}>
						<img src={`https://app.tannerfiscus.com/static/${item.photo}`} className="portfolio-list-item-image" />
						<figcaption>
							<h6 className="portfolio-list-item-tagline">
								{ item.tagline }
							</h6>
							<h5>{ item.title }</h5>
							<p className="portfolio-list-item-description"
							   dangerouslySetInnerHTML={{ __html: item.text }}>
							</p>
							<span>
								More &rarr;
							</span>
							<button className="button button-inflate">More &rarr;</button>
						</figcaption>
					</a>
					<div className="border-box-left"></div>
					<div className="border-box-top"></div>
					<div className="border-box-right"></div>
					<div className="border-box-bottom"></div>
				</figure>
			);
		});
	}

}

export default Portfolio;
