import React         from 'react'
import ResumeSection from '../ResumeSection'

const Education = () => (

    <ResumeSection
        title='Education'>

        <ul className='resume-list'>

            <li className='resume-list-item'>

                <div>

                    <p className='resume-list-item-small'>2015</p>

                    <h4 className='resume-list-item-title'>Internet Information Systems</h4>

                    <p className='resume-list-item-description'>
                        Master of Science (M.S.)<br/>
                        Robert Morris University
                    </p>

                </div>

            </li>

            <li className='resume-list-item'>

                <div>

                    <p className='resume-list-item-small'>2015</p>

                    <h4 className='resume-list-item-title'>Computer Information Systems</h4>

                    <p className='resume-list-item-description'>
                        Bachelor of Science (B.S.)<br/>
                        Robert Morris University
                    </p>

                </div>

            </li>

        </ul>

    </ResumeSection>

)

export default Education
