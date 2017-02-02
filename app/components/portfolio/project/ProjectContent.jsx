import PageContent 	       from '../../foundation/PageContent'
import ProjectCallout      from './ProjectCallout'
import ProjectCategories   from './ProjectCategories'
import ProjectCover        from './ProjectCover'
import ProjectDescriptions from './ProjectDescriptions'
import ProjectTimeline     from './ProjectTimeline'
import React               from 'react'

const ProjectContent = ({ data }) => {

    const { categories, descriptions, meta, photos, timeline } = data

    return (
        <div>

            <ProjectCover
                meta={ meta }
                photos={ photos } />

            <PageContent>

                <section className='project'>

                    <div className='grid padded'>

                        <ProjectDescriptions
                            descriptions={ descriptions } />


                        <div className='grid-spread-4 project-right-pane'>

                            <section className='project-right-pane-popout'>

                                <ProjectTimeline
                                    timeline={ timeline } />

                                <ProjectCategories
                                    categories={ categories } />

                                <ProjectCallout
                                    url={ meta && meta.url } />

                            </section>

                        </div>


                    </div>

                </section>

            </PageContent>

        </div>
    )

}

export default ProjectContent
