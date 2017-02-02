import { connect }	   from 'react-redux'
import { closeModal,
		 initModal }   from '../../actions/modal'
import React 	   	   from 'react'

const _getClasses = (modal = {}) => {
	const { isClosing, isVisible } = modal
	const classes = [ 'modal' ]

	if (isClosing) {
		classes.push('modal-closing')
	}

	if (isVisible) {
		classes.push('modal-open')
	}

	return classes.join(' ')
}

class Modal extends React.Component {
	constructor(...args) {
		super(...args)

		this.handleCloseClick = this.handleCloseClick.bind(this)
	}

	componentWillMount() {
		const { dispatch, name } = this.props
		dispatch(initModal(name))
	}

	render() {

		const { children, modals, name } = this.props
		const modal = modals[name]

		return (
			<div className={ _getClasses(modal) }>

				<div className='modal-header'>
					<a className='modal-header-button' onClick={ this.handleCloseClick } role='button'>
						<span className='modal-header-button-text'>Close</span>
					</a>
				</div>

				<div className='modal-content'>
					{ children }
				</div>

			</div>
		)
	}

	handleCloseClick(e) {
		e.preventDefault()

		const { dispatch, name } = this.props
		dispatch(closeModal(name))
	}

}

export default connect(state => ({
	modals: state.modal,
}))(Modal)
