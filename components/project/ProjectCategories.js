import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMobile, whiteSemiTransparent, whiteTransparent, gray3, gray8 } from '../../constants/styles/variables'

const ProjectCategories = ({ categories }) => {

    if (!categories || !categories.length) {
        return null
    }

    return (
        <ul className='categories'>
            {
                categories.map(category => (
                    <li className='category' key={ category }>
    					{ category }
    				</li>
                ))
            }

            <style>{`
                .categories {
                    margin: 2rem 0 0;
                }

                .category {
                    background: ${gray3};
                    border-radius: 3rem;
                    color: ${gray8};
                    display: inline-block;
                    font-size: 1.1em;
                    font-weight: 500;
                    margin: 0 0.5rem 0.5rem 0;
                    padding: .5rem 1rem;
                }
            `}</style>

        </ul>
    )

}

ProjectCategories.propTypes = {
    categories: PropTypes.array,
}

export default ProjectCategories
