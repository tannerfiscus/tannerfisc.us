'use strict';

import { connect }             from 'react-redux'
import Footer				   from './foundation/Footer';
import Header 				   from './foundation/Header';
import { mapDispatchToProps,
	     mapStateToProps }     from '../utils/store-utils'
import React                   from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const _getClasses = (pageName, mounted) => {

	const classes = [ 'app' ]

	if (pageName) { classes.push(`app-page${pageName}`) }
	if (mounted) { classes.push('app-mounted') }

	return classes.join(' ')

}

class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.app = null;

		this.state = {
			mounted: false
		}
	}

	componentDidMount() {
		const touch = window !== 'undefined' && 'ontouchstart' in document.documentElement;

		if (touch) {
			this.app.classList.remove('app');
			this.app.classList.add('app-touch');
		}

		this.setState({ mounted: true })

	}

	render() {
		const { location } = this.props
		const { pathname } = location
		const path = pathname.slice(-1) === '/' ? pathname.substr(0, pathname.length - 1) : pathname
		const pageHomeModifier = !path ? ' page-home' : ''
		const pageName = path ? path.replace(/\//g, '-') : '-home'

		return (
			<div className={ _getClasses(pageName, this.state.mounted) } ref={ (app) => this.app = app }>

				<ReactCSSTransitionGroup
					className={ 'page' + pageHomeModifier }
					component='div'
					transitionAppear={ true }
					transitionAppearTimeout={ 1000 }
					transitionEnterTimeout={ 1000 }
					transitionLeaveTimeout={ 400 }
					transitionName='page'>

					<Header key='header' />

					{ React.cloneElement(this.props.children, { ...this.props, key: pathname }) }

					<Footer key='footer' />

				</ReactCSSTransitionGroup>

			</div>
		)
	}
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
