import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Navigation from './Navigation'
import { transparentBorder } from '../constants/styles/variables'

const StyledHeader = styled.header`
    background: transparent;
    box-shadow: ${props => props.isFixed ? `0 0 8px ${transparentBorder}` : 'none'};
    left: 0;
    position: fixed;
    top: 0;
    transition: box-shadow 0.3s ease;
    width: 100%;
    will-change: box-shadow;
`

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
        const position = this.state.isFixed ? 'fixed' : 'static'

        return (
            <StyledHeader isFixed={this.state.isFixed}>

                <Logo small />

                <Navigation />

            </StyledHeader>
        )
    }
}

export default Header
