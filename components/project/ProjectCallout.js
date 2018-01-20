import PropTypes from 'prop-types'
import React from 'react'

import Button from '../common/Button'

const ProjectCallout = ({ url }) => {

    if (!url) {
        return null
    }


    return (
        <div className='project-callout'>

            <a href={ url } target='_blank'>
                <Button
                    block
                    inflate
                    inverted
                >
                    Visit Project Website &rarr;
                </Button>
            </a>

            <style jsx>{`
                .project-callout {
                    padding: 2rem 0 0;
                }

                a {
                    text-decoration: none;
                }
            `}</style>

        </div>
    )

}

ProjectCallout.propTypes = {
    url: PropTypes.string,
}

export default ProjectCallout
