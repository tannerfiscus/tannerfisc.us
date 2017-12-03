// import { connect }     from 'react-redux'
// import { openModal }   from '../../../actions/modal'
import Button from '../../common/Button'

import React from 'react'
import ResumeSection from '../ResumeSection'

const References = ({ dispatch }) => {

    // const _handleClick = e => {
	// 	e.preventDefault()
	// 	dispatch(openModal('contact'))
    // }

    return (
        <ResumeSection
            title='References'>

            <p>References are available upon request.</p>

            <p>
                <Button inverted>
                   Contact Me
                </Button>
            </p>

        </ResumeSection>
    )

}

//export default connect()(References)
export default References
