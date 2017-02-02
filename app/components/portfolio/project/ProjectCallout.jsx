import React from 'react'

const ProjectCallout = ({ url }) => {

    if (!url) {
        return null
    }


    return (
        <div className='project-callout'>

            <a className='button button-inverted button-inflate button-block'
               href={ url }
               target='_blank'>

                Visit Project Website&nbsp;&rarr;

            </a>

        </div>
    )

}

ProjectCallout.propTypes = {
    url: React.PropTypes.string,
}

export default ProjectCallout
