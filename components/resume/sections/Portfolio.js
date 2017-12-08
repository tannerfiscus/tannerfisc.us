// import { connect }     from 'react-redux'
// import { openModal }   from '../../../actions/modal'
import React           from 'react'

import Button from '../../common/Button'
import ModalTrigger from '../../common/modal/ModalTrigger'
import ResumeSection   from '../ResumeSection'

const Portfolio = ({ dispatch }) => {

    // const _handleClick = e => {
	// 	e.preventDefault()
	// 	dispatch(openModal('portfolio'))
    // }

    return (
        <p className='screen-only'>
            <ModalTrigger
                content={<div>The modal content!</div>}
            >
                <Button block>

                   View My Work &rarr;

                </Button>
            </ModalTrigger>
        </p>
    )
}

//export default connect()(Portfolio)
export default Portfolio
