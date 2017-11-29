import React from 'react'

import { breakpointMobile, gray7 } from '../../constants/styles/variables'
import Heading from '../common/Heading'

const ResumeSection = (props, context) => (

    <section className='resume-section'>

        <Heading size={5}>
            <div className='resume-section-header'>
                { props.title }
            </div>
        </Heading>

        { props.children }

        <style jsx>{`
            .resume-section {
                margin: 2rem 0;
            }

            .resume-section-header {
                border-bottom: 1px solid ${gray7};
                margin: 0 -1.75rem 1rem;
                padding: 0 1.75rem 1rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .resume-section-header {
                    margin: 0 0 1rem;
                    padding: 0 0 1rem;
                }
            }
        `}</style>

    </section>

)

export default ResumeSection
