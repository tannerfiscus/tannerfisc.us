import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMobile, breakpointMedium, gray1 } from '../../constants/styles/variables'
import ProjectCallout from './ProjectCallout'
import ProjectCategories from './ProjectCategories'
import ProjectTimeline from './ProjectTimeline'

class ProjectPopout extends React.PureComponent {

    constructor(props) {
        super(props)

        this.element = null
        this.handleScroll = this.handleScroll.bind(this)
        this.state = { isFixed: false }
    }

    componentDidMount() {
        window.requestAnimationFrame(this.handleScroll)
    }

    handleScroll() {
        console.log('window.scrollY', window.scrollY);
        const top = window.scrollY

        if (!this.state.isFixed && top > 275) {
            this.setState({ isFixed: true })
        } else if (this.state.isFixed && top <= 275) {
            this.setState({ isFixed: false })
        }

        window.requestAnimationFrame(this.handleScroll)
    }

    render() {
        const { categories } = this.props;

        if (!categories || !categories.length) {
            return null
        }

        return (
            <section
                className={ classnames('popout', {
                    'fixed': this.state.isFixed,
                }) }
                ref={ e => { this.element = e } }
            >

                <ProjectTimeline
                    timeline={ this.props.timeline } />

                <ProjectCategories
                    categories={ this.props.categories } />

                <ProjectCallout
                    url={ this.props.url } />

                <style jsx>{`
                    .popout {
                        background: ${gray1};
                        padding: 1rem;
                    }

                    .popout.fixed {
                        position: fixed;
                        right: 0;
                        top: 172px;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        .popout {
                            border-radius: 4px 0 0 4px;
                            margin: -3rem -1.25rem 0 0;
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
