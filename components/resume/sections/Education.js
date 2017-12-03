import React from 'react'
import ResumeList from '../list/ResumeList'
import ResumeListContent from '../list/ResumeListContent'
import ResumeListItem from '../list/ResumeListItem'
import ResumeSection from '../ResumeSection'

const Education = () => (

    <ResumeSection
        title='Education'>

        <ResumeList>

            <ResumeListItem>

                <div>

                    <ResumeListContent small>2015</ResumeListContent>

                    <ResumeListContent title>Internet Information Systems</ResumeListContent>

                    <ResumeListContent description>
                        Master of Science (M.S.)<br/>
                        Robert Morris University
                    </ResumeListContent>

                </div>

            </ResumeListItem>

            <ResumeListItem>

                <div>

                    <ResumeListContent small>2015</ResumeListContent>

                    <ResumeListContent title>Computer Information Systems</ResumeListContent>

                    <ResumeListContent description>
                        Bachelor of Science (B.S.)<br/>
                        Robert Morris University
                    </ResumeListContent>

                </div>

            </ResumeListItem>

        </ResumeList>

    </ResumeSection>

)

export default Education
