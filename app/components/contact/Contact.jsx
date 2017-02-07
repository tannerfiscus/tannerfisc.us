import ContactForm	 from './ContactForm'
import Cover	   	 from '../Cover'
import Helmet 	     from 'react-helmet'
import PageContent 	 from '../foundation/PageContent'
import React 		 from 'react'

const Contact = (props, context) => (

	<section className='page-about'>

		<Helmet
			meta={ [ { name: 'description', content: 'An online form for connecting with me.' } ] }
			title='Get In Touch – Tanner Fiscus' />

		<Cover
			backgroundImage='/assets/contact-graphic.jpg'
			title="Let's Connect" />

		<PageContent>
			<div className='pad-section grid'>
				<div className='grid-spread-8 grid-flex-2 grid-pad-2'>
					<h3 className='contact-title'><i className='twa twa-wave'></i> Breaking the ice can be awkward, right?</h3>
					<h5 className='contact-subtitle'>No need to worry. Just fill out the form and I'll take it from there.</h5>
					<ContactForm />
				</div>
			</div>
		</PageContent>

	</section>

)

export default Contact
