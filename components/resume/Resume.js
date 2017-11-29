import About	       from './sections/About'
import Contain         from '../common/Contain'
import Education       from './sections/Education'
import Experience      from './sections/Experience'
import Modals          from './sections/Modals'
import OnlinePortfolio from './sections/OnlinePortfolio'
import Portfolio 	   from './sections/Portfolio'
import React 	   	   from 'react'
import References      from './sections/References'
import ResumeBackLink  from './ResumeBackLink'
import ResumeHeader    from './ResumeHeader'

import Grid from '../common/grid/Grid'
import GridSection from '../common/grid/GridSection'

const Resume = () => (

	<section>

		<ResumeBackLink isFixed />

			<Contain>

				<ResumeHeader />

				<Grid>

                    <GridSection
                        padded
                        spread={4}
                    >

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

					</GridSection>

                    <GridSection
                        padded
                        spread={8}
                    >

						<Experience />

						<div className='resume-mobile'>
							<References />
						</div>

					</GridSection>

				</Grid>

				<div className='resume-logo'>

					  <div className="logo">
						  <div className="logo-shape"></div>
						  <div className="logo-text">TF</div>
					  </div>

				</div>

			</Contain>

			<ResumeBackLink />

			<Modals />

	</section>

)

export default Resume
