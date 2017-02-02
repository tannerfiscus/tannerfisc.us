import APIError		 	  from '../APIError';
import { connect } 		  from 'react-redux'
import { fetchPortfolio } from '../../actions/portfolio'
import { fetchProject }   from '../../actions/projects'
import Loading			  from '../foundation/Loading'
import PortfolioList	  from '../portfolio/PortfolioList'
import React 	   		  from 'react'

class ResumePortfolio extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.onProjectClick = this.onProjectClick.bind(this)
	}

	componentWillMount() {
		const { dispatch } = this.props
		dispatch(fetchPortfolio())
	}

	onProjectClick(projectPath) {
		const { dispatch } = this.props
		// projectPath contains /portfolio/, which we don't need here
		const urlPath = projectPath.replace('/portfolio/', '')

		dispatch(fetchProject(urlPath))
	}

	render() {
		const { hasLoaded,
				hasLoadedError,
				isLoading,
				projects } = this.props.portfolio

		return (
			<section className='resume-portfolio'>

				{ isLoading && <Loading /> }

				{ hasLoadedError &&
					<APIError content='my portfolio' /> }

				{ hasLoaded &&
					<PortfolioList
						onProjectClick={ this.onProjectClick }
						projects={ projects } /> }

			</section>
		)
	}

}

export default connect(state => ({
	portfolio: state.portfolio,
}))(ResumePortfolio)
