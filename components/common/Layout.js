import Footer from '../Footer'
import Header from '../Header'
import React from 'react'

import { breakpointMobile } from '../../constants/styles/variables';

export default ({ children }) => (
    <div>
        <Header />

        <main>

            { children }

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
