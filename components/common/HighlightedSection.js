import classnames from 'classnames'
import React from 'react'

import { gray1, gray7, transparentBorder } from '../../constants/styles/variables'
import Contain from './Contain'

const HighlightedSection = ({ children, light }) => (
    <section>

        <Contain>
            <div className={classnames('section-contain', {
                'section-contain-light': light,
            })}>
                { children }
            </div>
        </Contain>

        <style jsx>{`
            section {
                margin: 0 0 2rem;
                position: relative;
            }

            section::after {
                background: ${gray7};
                bottom: -2rem;
                content: '';
                height: 60%;
                height: calc(50% + 2rem);
                left: 0;
                position: absolute;
                width: 100%;
                z-index: -1;
            }

            .section-contain {
                background: ${gray1};
                border-radius: 5px;
                box-shadow: 0 0 8px ${transparentBorder};
                color: #fff;
                padding: 2rem;
                position: relative;
            }

            .section-contain-light {
                background: #fff;
                color: ${gray1};
            }
        `}</style>

    </section>
)

export default HighlightedSection
