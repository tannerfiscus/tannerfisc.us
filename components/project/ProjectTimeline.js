import PropTypes from 'prop-types'
import React    from 'react'
import Timeline from '../timeline/Timeline'

const ProjectTimeline = ({ timeline }) => {

    if (!timeline || !timeline.length) {
        return null
    }

    const timelineItems = timeline.map(item => ({
        title: item.text,
        date: item.time,
    }))

    return (
        <div className='project-timeline'>

            <div className='project-pane-title'>
                <h5>Project Timeline</h5>
            </div>

            <Timeline
                items={ timelineItems }
                minimized={ true }
            />

            <style jsx>{`
                .project-title {
                    padding: 0 0 2rem;
                }
            `}</style>

        </div>
    )

}

ProjectTimeline.propTypes = {
    timeline: PropTypes.array,
}

export default ProjectTimeline
