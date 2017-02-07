import Cover	   	 from '../Cover'
import PageContent 	 from '../foundation/PageContent'
import React 	   	 from 'react'

const Freelance = () => {

	return (
		<section className='page-about'>

			<Cover backgroundImage='/assets/freelance-graphic.jpg' />

			<PageContent>

				<section className='pad-section-large'>

					<h1 className='align-center'>
						Want to work together?
					</h1>

					<h5 className='align-center'>
						Unfortunately, I'm not accepting new work at this time.
					</h5>

				</section>

				<section className='pad-section-large grid'>
					<div className='grid-spread-6 grid-flex-3 grid-pad-3'>
						<p className='align-center'>
							If you'd like to work together on a project and have a flexible deadline, please feel free to get in touch with me. I'm not currently accepting new work, but will consider requests that do not have an immediate deadline. Cheers, friends. <i className='twa twa-beers'></i>
						</p>
					</div>
				</section>


				<section className='pad-section-large grid'>
					<div className='grid-spread-4 grid-flex-4 grid-pad-4'>
						<a className='button button-inflate button-block'
						   href='/contact/'>
							Let's Get In Touch
						</a>
					</div>
				</section>

			</PageContent>

		</section>
	)

}

export default Freelance
