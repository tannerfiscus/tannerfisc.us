import Helmet 	   from 'react-helmet'
import Intro	   from '../Intro'
import React 	   from 'react'

const Home = (props, context) => {

	return (

		<section className='page-home'>

			<Helmet
				meta={ [
					{ name: 'description', content: 'Hi, I\'m Tanner. I\'m a front-end developer and designer living in Pittsburgh, PA. I have a passion for building a better web.' },
					{ property: 'og:title', content: 'Tanner Fiscus' },
					{ property: 'og:description', content: 'Front-end developer and designer living in Pittsburgh, PA' },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:url', content: 'https://tannerfisc.us' },
					{ property: 'og:image', content: 'https://tannerfisc.us/assets/og/home.jpg' }
				] }
				title='Tanner Fiscus – Front-end Developer and Designer' />

			<Intro />

		</section>
	)

}

export default Home
