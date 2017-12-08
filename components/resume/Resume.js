import About	       from './sections/About'
import Contain         from '../common/Contain'
import Education       from './sections/Education'
import Experience      from './sections/Experience'
import Logo from '../Logo'
import Modals          from './sections/Modals'
import OnlinePortfolio from './sections/OnlinePortfolio'
import Portfolio 	   from './sections/Portfolio'
import React 	   	   from 'react'
import References      from './sections/References'
import ResumeHeader    from './ResumeHeader'

import Grid from '../common/grid/Grid'
import GridSection from '../common/grid/GridSection'

const Resume = () => (

	<section>

			<Contain>

				<ResumeHeader />

				<Grid>

                    <GridSection
                        padded
                        spread={4}
                    >

						<About />

						<Portfolio />

						<Education />

						<OnlinePortfolio />

						<References desktop />

					</GridSection>

                    <GridSection
                        padded
                        spread={8}
                    >

						<Experience />

						<References mobile />

					</GridSection>

				</Grid>

				<div className='print-only'>
					<div className='resume-logo'>
						 <Logo small />
					</div>
				</div>

			</Contain>

			<Modals />

            <style jsx>{`
                section {
                    margin: 4rem auto;
                    max-width: 68rem;
                }

				.resume-logo {
					display: flex;
					justify-content: flex-end;
				}
            `}</style>

	</section>

)

export default Resume
