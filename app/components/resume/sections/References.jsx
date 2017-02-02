import { connect }     from 'react-redux'
import { openModal }   from '../../../actions/modal'
import React           from 'react'
import ResumeSection   from '../ResumeSection'

const References = ({ dispatch }) => {

    const _handleClick = e => {
		e.preventDefault()
		dispatch(openModal('contact'))
    }

    return (
        <ResumeSection
            title='References'>

            <p>References are available upon request.</p>

            <p>
                <a className='button button-inverted'
                   href='/contact/'
                   onClick={ _handleClick }>
                   Contact Me
                </a>
            </p>

        </ResumeSection>
    )

}

export default connect()(References)
