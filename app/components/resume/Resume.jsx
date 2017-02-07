import About	       from './sections/About'
import Education       from './sections/Education'
import Experience      from './sections/Experience'
import Helmet 	       from 'react-helmet'
import Modals          from './sections/Modals'
import OnlinePortfolio from './sections/OnlinePortfolio'
import PageContent 	   from '../foundation/PageContent'
import Portfolio 	   from './sections/Portfolio'
import React 	   	   from 'react'
import References      from './sections/References'
import ResumeHeader    from './ResumeHeader'

const Resume = () => (

	<section className='page-resume'>

		<Helmet
			meta={ [
				{ property: 'og:title', content: 'Resume – Tanner Fiscus' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://tannerfisc.us/resume/' },
				{ property: 'og:image', content: 'https://tannerfisc.us/assets/og/portfolio.jpg' }
			] }
			title='Resume – Tanner Fiscus' />


			<PageContent>

				<ResumeHeader />

				<div className='grid'>

					<div className='grid-spread-4 padded'>

						<About />

						<div className='resume-screen'>
							<Portfolio />
						</div>

						<Education />

						<div className='resume-print'>
							<OnlinePortfolio />
						</div>

						<div className='resume-desktop'>
							<References />
						</div>

					</div>

					<div className='grid-spread-8 padded'>

						<Experience />

						<div className='resume-mobile'>
							<References />
						</div>

					</div>

				</div>

				<div className='resume-logo'>

					  <div className="logo">
						  <div className="logo-shape"></div>
						  <div className="logo-text">TF</div>
					  </div>

				</div>

			</PageContent>

			<Modals />

	</section>

)

export default Resume
