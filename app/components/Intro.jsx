import React from 'react'

class Cover extends React.Component {

	componentDidMount() {
		if (document && document.getElementsByClassName('page')[0]) {
			setTimeout(() => {
				document.getElementsByClassName('page')[0].classList.add('page-home-enter')
			}, 100)
		}
	}

	componentWillUnmount() {
		if (document && document.getElementsByClassName('page')[0]) {
			document.getElementsByClassName('page')[0].classList.remove('page-home-enter')
		}
	}

	render() {
		return (
			<section className='intro'>

				<h1 className='intro-text'>

					<div className='intro-text-group'>

						<div className='intro-text-top'>
							Developer.
						</div>
						
						<div className='intro-text-bottom'>
							Designer.
						</div>

					</div>

				</h1>

				<div className='intro-image'></div>

			</section>
		)
	}

}

export default Cover
