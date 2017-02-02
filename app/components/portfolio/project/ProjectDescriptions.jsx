import React                    from 'react'

const ProjectDescriptions = ({ descriptions }) => {

    if (!descriptions || !descriptions.length) {
        return null
    }

	return (
		<div className='grid-spread-8'>
			{
				descriptions.map((description, i) => (
					<div className='project-description' key={ i }>

						<h5 className='project-description-heading'>
							{ description.heading }
						</h5>

						<p className='project-description-text'
						   dangerouslySetInnerHTML={{ __html: description.text }}>
						</p>

					</div>
				))
			}
		</div>
	)

}

ProjectDescriptions.propTypes = {
    descriptions: React.PropTypes.array,
}

export default ProjectDescriptions
