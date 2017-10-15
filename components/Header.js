import classnames from 'classnames';
import React from 'react'

import Logo from './Logo'
import Navigation from './Navigation'
import { transparentBorder } from '../constants/styles/variables'

class Header extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this)
        this.state = { isFixed: false }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {
        const offset = window.pageYOffset

        if (offset > 0 && !this.state.isFixed) {
            this.setState({ isFixed: true })
        } else if (offset === 0 && this.state.isFixed) {
            this.setState({ isFixed: false })
        }

    }

    render() {
        return (
            <header>

                <div className='header-logo'>
                    <Logo small />
                </div>

                <Navigation />

                <style jsx>{`
                    header {
                        background: #fff;
                        box-shadow: ${this.state.isFixed ? `0 0 8px ${transparentBorder}` : 'none'};
                        display: flex;
                        left: 0;
                        padding: 0.25rem 2rem;
                        position: fixed;
                        top: 0;
                        transition: box-shadow 0.3s ease;
                        width: 100%;
                        will-change: box-shadow;
                    }

                    .header-logo {
                        flex: 1 auto;
                    }
                `}</style>

            </header>
        )
    }
}

export default Header
