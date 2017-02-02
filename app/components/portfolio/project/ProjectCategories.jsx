import Pills from '../../Pills'
import React from 'react'

const ProjectCategories = ({ categories }) => {

    if (!categories || !categories.length) {
        return null
    }

    return (
        <div className='project-categories'>

            <div className='project-pane-title'>
                <h5>Technologies / Skills</h5>
            </div>

            <Pills
                items={ categories } />

        </div>
    )

}

ProjectCategories.propTypes = {
    categories: React.PropTypes.array,
}

export default ProjectCategories
