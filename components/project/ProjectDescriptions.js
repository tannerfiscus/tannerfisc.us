import PropTypes from 'prop-types'
import React from 'react'

import Heading from '../common/Heading'

const ProjectDescriptions = ({ descriptions }) => {

    if (!descriptions || !descriptions.length) {
        return null
    }

	return (
		<div>
			{
				descriptions.map((description, i) => (
					<div className='project-description' key={ i }>

                        <Heading size={5}>
							{ description.heading }
                        </Heading>

						<p className='project-description-text'
						   dangerouslySetInnerHTML={{ __html: description.text }}>
						</p>

					</div>
				))
			}

            <style>{`
                .project-description + .project-description {
                    padding: 2rem 0 0;
                }
            `}</style>
		</div>
	)

}

ProjectDescriptions.propTypes = {
    descriptions: PropTypes.array,
}

export default ProjectDescriptions
