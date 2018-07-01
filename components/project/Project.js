import React from 'react'

import { breakpointDesktop, breakpointMedium, gray1 } from '../../constants/styles/variables'
import { buildProjectImageURL } from '../../utils/url'
import Contain from '../common/Contain'
import Cover from '../common/Cover'
import Grid from '../common/grid/Grid'
import GridSection from '../common/grid/GridSection'
import Layout from '../common/Layout'
import ProjectDescriptions from './ProjectDescriptions'
import ProjectPopout from './ProjectPopout'

const Project = ({ item: { categories, descriptions, photos, timeline, title } }) => {

    const hasRightColumn = Boolean(categories.length || timeline.length);

    return (
        <Layout>

            <Cover
                image={ buildProjectImageURL(photos.cover && photos.cover.url) }
                title={ title }
            />

            <Contain>
                <section className='project'>

                    <Grid>

                        <GridSection
                            padded
                            spread={hasRightColumn ? 8 : 12}>

                            <ProjectDescriptions
                                descriptions={ descriptions } />

                        </GridSection>

                        { hasRightColumn && (
                            <GridSection spread={4}>

                                <ProjectPopout
                                    categories={categories}
                                    timeline={timeline}
                                    url={ null }
                                />

                            </GridSection>
                        )}


                    </Grid>

                </section>
            </Contain>

            <style jsx>{`
                .project {
                    margin: 1.25rem 0 2rem;
                }

                @media only screen and (min-width: ${breakpointDesktop}) {
                    .project {
                        margin-bottom: 3rem;
                    }
                }
            `}</style>

        </Layout>
    )
}

export default Project
