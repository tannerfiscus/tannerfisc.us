import React 	from 'react'

const Footer = (props, context) => (
	<footer>
		<div className='contain'>

			<div className='logo logo-inverted'>
				<div className='logo-shape'></div>
				<div className='logo-text'>TF</div>
			</div>

			<div className='grid'>

				<div className='grid-spread-3 padded'>
					<strong>&copy; 2016</strong><br/>
					Tanner Fiscus <i className='twa twa-v'></i><i className='twa twa-sunny'></i>
				</div>

				<div className='grid-spread-3 padded'>
					<strong>Find Me Online</strong><br/>
					<a href='http://twitter.com/tannerfiscus'>Twitter</a> &middot; <a href='http://linkedin.com/in/tannerfiscus'>LinkedIn</a> &middot; <a href='https://github.com/tannerfiscus'>Github</a>
				</div>

				<div className='grid-spread-6 padded'>
					<strong>Made with</strong> <i className='twa twa-heart'></i><br/>
					in Pittsburgh, PA
				</div>

			</div>

		</div>
	</footer>
)

export default Footer
