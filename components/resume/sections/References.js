import classnames from 'classnames'
import React from 'react'

import { breakpointMobile } from '../../../constants/styles/variables'
import ResumeSection from '../ResumeSection'

const References = ({ dispatch, desktop, mobile }) => {

    return (
        <div className={classnames({
            desktop: desktop,
            mobile: mobile,
        })}>
            <ResumeSection
                title='References'>

                <p>References are available upon request.</p>

            </ResumeSection>

            <style jsx>{`
                .desktop {
                    display: none;
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    .desktop {
                        display: block;
                    }

                    .mobile {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )

}

//export default connect()(References)
export default References
