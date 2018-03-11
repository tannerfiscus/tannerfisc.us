import Footer from '../Footer'
import Header from '../Header'
import React, { PureComponent } from 'react'

import { breakpointMobile } from '../../constants/styles/variables';

class Layout extends PureComponent {
    componentDidMount() {
        try {
            const body = document.getElementsByTagName('body')[0]

            if ('ontouchstart' in window && !body.classList.contains('touch-device')) {
                body.classList.add('touch-device')
            }
        } catch(e) {}
    }

    render() {
        return (
            <div>
                <Header />

                <main>

                    { this.props.children }

                </main>

                <Footer />

                <style jsx>{`
                    main {
                        padding: 4.5rem 0 0;
                    }

                    @media only screen and (min-width: ${breakpointMobile}) {
                        main {
                            padding-top: 7.5rem;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Layout
