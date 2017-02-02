import { connect }     from 'react-redux'
import { openModal }   from '../../../actions/modal'
import React           from 'react'
import ResumeSection   from '../ResumeSection'

const Portfolio = ({ dispatch }) => {

    const _handleClick = e => {
		e.preventDefault()
		dispatch(openModal('portfolio'))
    }

    return (
        <p>
            <a className='button button-block'
               href='/portfolio/'
               onClick={ _handleClick }>

               View My Work &rarr;

            </a>
        </p>
    )
}

export default connect()(Portfolio)
