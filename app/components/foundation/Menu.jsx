import React 		   from 'react'
import ReactDOM 	   from 'react-dom'
import { Link } 	   from 'react-router'
import { scrollToTop } from '../../utils/scroll'

const PAGES = [
	{ url: '/', title: { desktop: 'Home', mobile: '' } },
	{ url: '/about/', title: { desktop: 'About Me', mobile: 'About' } },
	{ url: '/portfolio/', title: { desktop: 'My Work', mobile: 'Work' } },
	{ url: '/contact/', title: { desktop: 'Get In Touch', mobile: 'Contact' } }
]

const _renderMenuItems = () => PAGES.map(page => (

	<li key={ page.url }>

		<Link to={ page.url }
			  onClick={ scrollToTop }>

			  <span className='navigation-list-item--desktop'>
				{ page.title.desktop }
			  </span>

			  <span className='navigation-list-item--mobile'>
				{ page.title.mobile }
			  </span>

		</Link>

	</li>

))

const Menu = () => (

	<menu className='navigation'>

		<ul className='navigation-list'>

			<li className='navigation-list-title'><h5>Pages</h5></li>

			{ _renderMenuItems() }

		</ul>

	</menu>

)

export default Menu
