// This component will be dynamically imported so that not all of the
// project data is bundled into the main app bundle.
import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

import { buildProjectImageURL } from '../../utils/url'
import projects from '../../projects/all';
import Project from './Project'

const DynamicPortfolio = ({ projectId }) => {

    const project = projects.find(project => project.id === projectId);

    return (
        <Fragment>

            <Helmet
                meta={ [
                    { name: 'description', content: `Discover the details about my design and build process for the ${ project.title } project.` },
                    { property: 'og:title', content: project.title },
                    { property: 'og:description', content: `Discover the process behind building and designing the ${project.title} project.` },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:url', content: `https://tannerfisc.us/portfolio/${projectId}/` },
                    { property: 'og:image', content: project.photos.cover ? buildProjectImageURL(project.photos.cover.url) : 'https://tannerfisc.us/static/images/og/portfolio.jpg' }
                ] }
                title={ `${project.title} – Project by Tanner Fiscus` }
            />

            <Project item={project} />

        </Fragment>
    )
}

export default DynamicPortfolio
