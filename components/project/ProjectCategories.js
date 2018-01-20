import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMobile, whiteSemiTransparent, whiteTransparent } from '../../constants/styles/variables'

const ProjectCategories = ({ categories }) => {

    if (!categories || !categories.length) {
        return null
    }

    return (
        <div className='project-categories'>

            <div className='project-pane-title'>
                <h5>Technologies / Skills</h5>
            </div>

            <ul className='pill-container'>
            {
                categories.map(category => (
                    <li className='pill' key={ category }>
    					{ category }
    				</li>
                ))
            }
            </ul>

            <style>{`
                .pill {
                    background: ${whiteTransparent};
                    border-radius: 3rem;
                    color: $gray8;
                    display: inline-block;
                    font-size: 1.1em;
                    font-weight: 500;
                    margin: 0 0.5rem 0.5rem 0;
                    padding: .5rem 1rem;

                    @media only screen and (min-width: ${breakpointMobile}) {
                        background: ${whiteSemiTransparent};
                        color: #fff;
                    }
                }
            `}</style>

        </div>
    )

}

ProjectCategories.propTypes = {
    categories: PropTypes.array,
}

export default ProjectCategories
