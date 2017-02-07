import Cover	   	   from '../Cover'
import Helmet 	       from 'react-helmet'
import { Link }    	   from 'react-router'
import PageContent 	   from '../foundation/PageContent'
import React 	   	   from 'react'
import { scrollToTop } from '../../utils/scroll'
import TimelineItems   from '../../constants/about-timeline-items'
import Timeline	 	   from '../Timeline'

class About extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<section className='page-about'>

				<Helmet
					meta={ [
						{ name: 'description', content: 'View my experience, find out a little bit about me, and see why I have a passion for building a better web.' },
						{ property: 'og:title', content: 'About Tanner Fiscus' },
						{ property: 'og:description', content: `I'm passionate about building a better web` },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:url', content: 'https://tannerfisc.us/about/' },
						{ property: 'og:image', content: 'https://tannerfisc.us/assets/og/about-me.jpg' }
					] }
					title='About Me – Tanner Fiscus' />

				<Cover title={ `Hi, I'm Tanner` }
					   backgroundImage='/assets/about-graphic.jpg' />

				<PageContent>

					{ this.renderIntro() }
					{ this.renderTimeline() }
					{ this.renderBio() }
					{ this.renderPortfolioCallout() }

				</PageContent>

			</section>
		)
	}

	renderBio() {
		return (
			<section className='pad-section-large'>

				<h5 className='align-center'>
					A Little More About Me
				</h5>

				<ul className='about-me-bio align-center'>
					<li>I work with an extraordinarily talented team building the future of Niche.com. <i className='twa twa-school'></i><i className='twa twa-house-with-garden'></i></li>
					<li>React <i className='twa twa-heart'></i>, Sass, and LESS are just a few of the things I work with every day.</li>
					<li>I&#39;m currently designing and developing from Pittsburgh, PA. <i className='twa twa-computer'></i></li>
					<li>I write a bunch of cool things with vanilla Javascript. <i className='twa twa-heart-eyes'></i></li>
					<li>I&#39;m always learning something new. #juniordevforlife</li>
					<li>I&#39;m fluent in Javascript, CSS, and HTML.</li>
					<li>I&#39;m determined to travel the world. <i className='twa twa-airplane'></i></li>
					<li>I couldn&#39;t survive without coffee. <i className='twa twa-coffee'></i></li>
					<li>I have an adorable fur baby. <i className='twa twa-dog'></i></li>
					<li>I enjoy vegan eats. <i className='twa twa-fork-and-knife'></i></li>
				</ul>

			</section>
		)
	}

	renderIntro() {
		return (
			<section className='pad-section-large'>
				<h2 className='align-center'>
					I&#39;m passionate about building a better web.
				</h2>
			</section>
		)
	}

	renderPortfolioCallout() {
		return (
			<section className='pad-section-large'>
				<div className='grid'>
					<div className='grid-spread-6 grid-flex-3 grid-pad-3'>
						<Link className='button button-inflate button-block'
							  onClick={ scrollToTop }
							  to='/portfolio'>
							View My Work &rarr;
						</Link>
					</div>
				</div>
				<div className='grid'>
					<div className='grid-spread-6 grid-flex-3 grid-pad-3'>
						<Link className='button button-inverted button-inflate button-block'
							  onClick={ scrollToTop }
							  to='/resume'>
							View My Resume &rarr;
						</Link>
					</div>
				</div>
			</section>
		)
	}

	renderTimeline() {
		return (
			<section className='pad-section-large'>

				<h5 className='align-center'>
					Experience Timeline
				</h5>

				<Timeline
					items={TimelineItems} />

			</section>
		)
	}
}

export default About
