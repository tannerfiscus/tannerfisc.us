import Menu			   from './Menu'
import React 		   from 'react'
import { Link } 	   from 'react-router'
import { scrollToTop } from '../../utils/scroll'

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.handleFixedHeader = this.handleFixedHeader.bind(this)
		this.header = null
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleFixedHeader, false)
	}

	render() {
		return (
			<header ref={ (h) => this.header = h }>

		        <div className='contain'>

		            <h5 className='branding'>
		                <Link to='/'
							  onClick={ scrollToTop }>
		                    <div className='logo'>
		                        <div className='logo-shape'></div>
		                        <div className='logo-text'>TF</div>
		                    </div>
						</Link>
		            </h5>

		            <Menu />

		        </div>

		    </header>
		)
	}

	handleFixedHeader() {
		const offset = window.pageYOffset

	    if (this.header && offset > 0 && !this.header.classList.contains('header-fixed')) {
	        this.header.classList.add('header-fixed')
	    } else if (this.header && offset === 0 && this.header.classList.contains('header-fixed')) {
	        this.header.classList.remove('header-fixed')
	    }

	}
}

export default Header
