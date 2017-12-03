// import { connect }     from 'react-redux'
// import { openModal }   from '../../../actions/modal'
import React           from 'react'

import Button from '../../common/Button'
import ResumeSection   from '../ResumeSection'

const Portfolio = ({ dispatch }) => {

    // const _handleClick = e => {
	// 	e.preventDefault()
	// 	dispatch(openModal('portfolio'))
    // }

    return (
        <p>
            <Button
                block
                onClick={ () => alert('need to implement') }>

               View My Work &rarr;

            </Button>
        </p>
    )
}

//export default connect()(Portfolio)
export default Portfolio
