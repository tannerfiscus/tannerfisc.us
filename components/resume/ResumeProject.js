// import APIError		 	  from '../APIError';
// import { connect } 		  from 'react-redux'
// import Loading			  from '../foundation/Loading'
// import { openModal }      from '../../actions/modal'
// import ProjectContent     from '../portfolio/project/ProjectContent'
import React 	   		  from 'react'

const ResumeProject = () => <div>RESUME PROJECT</div>

// class ResumeProject extends React.Component {
//
// 	constructor(props, context) {
// 		super(props, context)
//
// 		this.state = { activeProject: null }
// 	}
//
// 	componentWillReceiveProps({ dispatch, projects }) {
//
// 		const activeProject = Object.keys(projects).find(projectKey => {
// 			return projects[projectKey].isVisible
// 		})
//
// 		// If we have a new active project, we need to open the modal
// 		if (activeProject !== this.state.activeProject) {
// 			this.setState({ activeProject })
//
// 			if (activeProject) {
// 				dispatch(openModal('resumeProject'))
// 			}
// 		}
//
// 	}
//
// 	render() {
//
// 		const { activeProject } = this.state
// 		const { projects } = this.props
// 		const project = projects && projects[activeProject]
//
// 		return (
// 			<section className='resume-project'>
//
// 				{ project &&
// 					project.isLoading &&
// 						<Loading /> }
//
// 				{ project &&
// 					project.hasLoadedError &&
// 						<APIError content='my portfolio' /> }
//
// 				{ project &&
// 					project.hasLoaded &&
// 						<ProjectContent data={ project.data } /> }
//
// 			</section>
// 		)
// 	}
//
// }
//
// export default connect(state => ({
// 	projects: state.projects,
// }))(ResumeProject)

export default ResumeProject
