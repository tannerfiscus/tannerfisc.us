import classnames from 'classnames'
import React from 'react'

import { breakpointDesktopMaxPadded, breakpointMobile, gray1, gray7, transparentBorder } from '../../constants/styles/variables'

const HighlightedSection = ({ children, light }) => (
    <section>

        <div className={classnames('section-contain', {
            'section-contain-light': light,
        })}>
            { children }
        </div>

        <style jsx>{`
            section {
                margin: 0;
                position: relative;
            }

            .section-contain {
                background: ${gray1};
                color: #fff;
                padding: 1rem 0;
                position: relative;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .section-contain {
                    padding: 2rem;
                }
            }

            .section-contain-light {
                background: #fff;
                color: ${gray1};
            }
        `}</style>

    </section>
)

export default HighlightedSection
