import React from 'react'

import { breakpointMobile, breakpointMedium, gray1 } from '../../constants/styles/variables'
import { buildProjectImageURL } from '../../utils/url'
import Cover from '../common/Cover'
import Grid from '../common/grid/Grid'
import GridSection from '../common/grid/GridSection'
import Layout from '../common/Layout'
import ProjectDescriptions from './ProjectDescriptions'
import ProjectPopout from './ProjectPopout'

const Project = ({ item: { categories, descriptions, meta, photos, timeline } }) => (
    <Layout>

        <Cover
            image={ buildProjectImageURL(photos.cover && photos.cover.url) }
            title={ meta.name }
        />

        <section className='project'>

            <Grid>

                <GridSection
                    padded
                    spread={8}>

                    <ProjectDescriptions
                        descriptions={ descriptions } />

                </GridSection>

                <GridSection spread={4}>

                    <ProjectPopout
                        categories={categories}
                        timeline={timeline}
                        url={ meta && meta.url }
                    />

                </GridSection>


            </Grid>

        </section>

        <style jsx>{`
            .project {
                margin: 1.25rem 0.25rem 0;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .project {
                    margin: 1.25rem 1.25rem 1.25rem;
                }
            }
        `}</style>

    </Layout>
)

export default Project
