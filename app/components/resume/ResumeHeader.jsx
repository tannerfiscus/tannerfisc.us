import React   from 'react'
import Address from './sections/Address'

const ResumeHeader = () => (
    <figure className='resume-header'>

        <img className='resume-header-image' src='/assets/resume-graphic.jpg' />

        <figcaption>
            <h1>Hi, I&#39;m Tanner</h1>
        </figcaption>

        <Address />

    </figure>
)

export default ResumeHeader
