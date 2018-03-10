import PropTypes from 'prop-types'
import React    from 'react'
import Timeline from '../timeline/Timeline'
import { breakpointMobile } from '../../constants/styles/variables'

const ProjectTimeline = ({ timeline }) => {

    if (!timeline || !timeline.length) {
        return null
    }

    const timelineItems = timeline.map(item => ({
        title: item.text,
        date: item.time,
    }))

    return (
        <div>
            <Timeline
                items={ timelineItems }
                showHeading={false}
                stagger={false}
            />

            <style jsx>{`
                div {
                    margin: -1rem 0 2rem -1rem;
                }

                @media (min-width: ${breakpointMobile}) {
                    div {
                        margin-left: -2rem;
                    }
                }
            `}</style>
        </div>
    )

}

ProjectTimeline.propTypes = {
    timeline: PropTypes.array,
}

export default ProjectTimeline
