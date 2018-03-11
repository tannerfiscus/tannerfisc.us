import classnames from 'classnames'
import React from 'react'

import { breakpointMobile } from '../../../constants/styles/variables'

const GridSection = ({ children, padded, spread }) => (
    <div className={classnames(
        'grid-section',
        `grid-spread-${spread}`,
        { 'grid-section-padded': padded }
    )}>

        { children }

        <style jsx>{`
            .grid-section {
                box-sizing: border-box;
                flex: 1 auto;
                width: 100%;
            }

            .grid-section-padded {
                padding: 0.75rem;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
            	.grid-spread-12 {
            		width: 100%;
            	}
            	.grid-spread-11 {
            		width: 91.66666667%;
            	}
            	.grid-spread-10 {
            		width: 83.33333333%;
            	}
            	.grid-spread-9 {
            		width: 75%;
            	}
            	.grid-spread-8 {
            		width: 66.66666667%;
            	}
            	.grid-spread-7 {
            		width: 58.33333333%;
            	}
            	.grid-spread-6 {
            		width: 50%;
            	}
            	.grid-spread-5 {
            		width: 41.66666667%;
            	}
            	.grid-spread-4 {
            		width: 33.33333333%;
            	}
            	.grid-spread-3 {
            		width: 25%;
            	}
            	.grid-spread-2 {
            		width: 16.66666667%;
            	}
            	.grid-spread-1 {
            		width: 8.333333333%;
            	}

            	.grid-flex-11 {
            		margin-left: 91.66666667%;
            	}
            	.grid-flex-10 {
            		margin-left: 83.33333333%;
            	}
            	.grid-flex-9 {
            		margin-left: 75%;
            	}
            	.grid-flex-8 {
            		margin-left: 66.66666667%;
            	}
            	.grid-flex-7 {
            		margin-left: 58.33333333%;
            	}
            	.grid-flex-6 {
            		margin-left: 50%;
            	}
            	.grid-flex-5 {
            		margin-left: 41.66666667%;
            	}
            	.grid-flex-4 {
            		margin-left: 33.33333333%;
            	}
            	.grid-flex-3 {
            		margin-left: 25%;
            	}
            	.grid-flex-2 {
            		margin-left: 16.66666667%;
            	}
            	.grid-flex-1 {
            		 margin-left: 8.333333333%;
            	}

            	.grid-pad-11 {
            		padding-right: 91.66666667%;
            	}
            	.grid-pad-10 {
            		padding-right: 83.33333333%;
            	}
            	.grid-pad-9 {
            		padding-right: 75%;
            	}
            	.grid-pad-8 {
            		padding-right: 66.66666667%;
            	}
            	.grid-pad-7 {
            		padding-right: 58.33333333%;
            	}
            	.grid-pad-6 {
            		padding-right: 50%;
            	}
            	.grid-pad-5 {
            		padding-right: 41.66666667%;
            	}
            	.grid-pad-4 {
            		padding-right: 33.33333333%;
            	}
            	.grid-pad-3 {
            		padding-right: 25%;
            	}
            	.grid-pad-2 {
            		padding-right: 16.66666667%;
            	}
            	.grid-pad-1 {
            		 padding-right: 8.333333333%;
            	}
            }
        `}</style>

    </div>
)

export default GridSection
