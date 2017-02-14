import { Link } from 'react-router'
import React    from 'react'

const ResumeBackLink = ({ isFixed }) => {

    const classList = isFixed ? 'resume-back-link resume-back-link-fixed' : 'resume-back-link'

    return (

        <Link className={ classList } to='/about/'>

            <div className='resume-back-link-contain'>
                &larr; Back to Website
            </div>

        </Link>

    )

}

ResumeBackLink.propTypes = {
    isFixed: React.PropTypes.bool,
}

export default ResumeBackLink
