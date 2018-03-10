import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMobile, breakpointMedium, gray7 } from '../../constants/styles/variables'
import ProjectCallout from './ProjectCallout'
import ProjectCategories from './ProjectCategories'
import ProjectTimeline from './ProjectTimeline'

class ProjectPopout extends React.PureComponent {

    render() {
        const { categories } = this.props;

        if (!categories || !categories.length) {
            return null
        }

        return (
            <section className='popout'>

                { Boolean(this.props.timeline && this.props.timeline.length) && (
                    <div className='popout-title'>
                        <h5>Project Timeline</h5>
                    </div>) }

                <ProjectTimeline
                    timeline={ this.props.timeline } />

                { Boolean(this.props.categories && this.props.categories.length) && (
                    <div className='popout-title'>
                        <h5>Technologies / Skills</h5>
                    </div>) }

                <ProjectCategories
                    categories={ this.props.categories } />

                <ProjectCallout
                    url={ this.props.url } />

                <style jsx>{`
                    .popout {
                        padding: 1rem;
                    }

                    .popout-title {
                        border-bottom: 4px solid ${gray7};
                        display: inline-block;
                        margin: 0 0 0 -2rem;
                        padding: 0 2rem 0.5rem 2rem;
                        font-size: 1.25rem;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .popout {
                            border-left: 4px solid ${gray7};
                            margin: 0 0 0 1rem;
                            padding: 1rem 1rem 1rem 2rem;
                            position: relative;
                            z-index: 2;
                        }
                    }

                    @media only screen and (min-width: ${breakpointMedium}) {
                        .popout {
                            padding: 2rem;
                        }
                    }
                `}</style>

            </section>
        )

    }

}

ProjectPopout.propTypes = {
    timeline: PropTypes.array,
    categories: PropTypes.array,
    url: PropTypes.string,
}

export default ProjectPopout
