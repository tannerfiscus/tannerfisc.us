// import { connect }     from 'react-redux'
// import { openModal }   from '../../../actions/modal'
import classnames from 'classnames'
import React from 'react'

import Button from '../../common/Button'
import { breakpointMobile } from '../../../constants/styles/variables'
import ResumeSection from '../ResumeSection'

const References = ({ dispatch, desktop, mobile }) => {

    // const _handleClick = e => {
	// 	e.preventDefault()
	// 	dispatch(openModal('contact'))
    // }

    return (
        <div className={classnames({
            desktop: desktop,
            mobile: mobile,
        })}>
            <ResumeSection
                title='References'>

                <p>References are available upon request.</p>

                <p>
                    <Button inverted>
                       Contact Me
                    </Button>
                </p>

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
