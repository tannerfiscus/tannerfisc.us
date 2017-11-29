import classnames from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMobile, gray1, gray2, gray3, gray4, gray6, gray7, gray8 } from '../../constants/styles/variables'

const ResumeBackLink = ({ isFixed }) => {

    return (
        <div>

            <Link href='/about/'>
                <div className={classnames(
                    'resume-back-link',
                    { 'resume-back-link-fixed': isFixed }
                )}>
                    <div className='resume-back-link-contain'>
                        &larr; Back to Website
                    </div>
                </div>
            </Link>,

            <style jsx>{`
                .resume-back-link {
                    border-top: 1px solid ${gray7};
                    color: ${gray4};
                    cursor: pointer;
                    display: block;
                    padding: 2rem 1rem;
                    text-align: center;
                    transition: border-top 0.3s ease, color 0.3s ease;
                }

                .resume-back-link:hover {
                    border-top: 1px solid ${gray6};
                    color: ${gray2};
                }

                @media only screen and (min-width: ${breakpointMobile}) {
                    .resume-back-link {
                        text-align: left;
                    }
                }

                .resume-back-link-fixed {
                    background: ${gray8};
                    border: 0;
                    box-shadow: 0 0 8px rgba(24, 24, 24, 0.15);
                    color: ${gray3};
                    left: 0;
                    padding: 0;
                    position: fixed;
                    top: 0;
                    transform: translateY(0);
                    transition: background 0.3s ease, color 0.3s ease, transform 0.4s ease;
                    width: 100%;
                    z-index: 10;
                }

                .resume-back-link-fixed:hover {
                    background: ${gray1};
                    border: 0;
                    color: ${gray8};
                }

                .page-appear .resume-back-link-fixed {
                    transform: translateY(-3rem);
                }

                .resume-back-link-contain {
                    margin: 0 auto;
                    max-width: 62rem;
                    padding: 0.5rem 1rem;
                }
            `}</style>
        </div>
    )

}

ResumeBackLink.propTypes = {
    isFixed: PropTypes.bool,
}

export default ResumeBackLink
