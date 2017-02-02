import React    from 'react'
import Timeline from '../../Timeline'

const _formatTimelineData = timeline => timeline.map(item => ({
    title: item.text,
    date: item.time,
}))

const ProjectTimeline = ({ timeline }) => {

    if (!timeline || !timeline.length) {
        return null
    }

    const items = _formatTimelineData(timeline)

    return (
        <div className='project-timeline'>

            <div className='project-pane-title'>
                <h5>Project Timeline</h5>
            </div>

            <Timeline
                items={ items }
                minimized={ true } />
        </div>
    )

}

ProjectTimeline.propTypes = {
    timeline: React.PropTypes.array,
}

export default ProjectTimeline
