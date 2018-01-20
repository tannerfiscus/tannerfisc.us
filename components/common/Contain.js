import React from 'react'

import { breakpointMobile } from '../../constants/styles/variables'

const Contain = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                padding: 0 1rem;
                margin: 0 auto;
                max-width: 90rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                div {
                    padding: 0 2rem;
                }
            }
        `}</style>
    </div>
)

export default Contain
