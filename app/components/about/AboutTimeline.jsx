import React         from 'react'
import TimelineItems from '../../constants/about-timeline-items'
import Timeline	 	 from '../Timeline'

const AboutTimeline = () => (

    <section className='pad-section-large'>

        <h5 className='align-center'>
            Experience Timeline
        </h5>

        <Timeline
            items={ TimelineItems } />

    </section>

)

export default AboutTimeline
