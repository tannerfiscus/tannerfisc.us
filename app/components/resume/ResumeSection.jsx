import React from 'react'

const ResumeSection = (props, context) => (

    <section className='resume-section'>

        <h5 className='resume-section-header'>
            { props.title }
        </h5>

        { props.children }

    </section>

)

export default ResumeSection
