import { buildProjectImageURL } from '../../../utils/url'
import Cover                    from '../../Cover'
import React                    from 'react'

const ProjectCover = ({ meta, photos }) => {

    if (!meta || !photos) {
        return null
    }

    const coverPhoto = photos.cover && photos.cover.url

    return (
        <Cover
            backgroundImage={ buildProjectImageURL(coverPhoto) }
            coverImage
            title={ meta.name } />
    )

}

ProjectCover.propTypes = {
    meta: React.PropTypes.object,
    photos: React.PropTypes.object,
}

export default ProjectCover
