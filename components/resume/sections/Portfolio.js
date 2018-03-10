import React           from 'react'

import Button from '../../common/Button'
import ModalTrigger from '../../common/modal/ModalTrigger'
import ResumePortfolio from '../ResumePortfolio'
import ResumeSection from '../ResumeSection'

const Portfolio = ({ dispatch }) => {

    return (
        <div className='screen-only'>
            <ModalTrigger
                content={<ResumePortfolio />}
            >
                <Button block>

                   View My Work &rarr;

                </Button>
            </ModalTrigger>
        </div>
    )
}

export default Portfolio
