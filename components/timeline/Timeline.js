import React from 'react'

import Contain from '../common/Contain'
import { breakpointMobile, gray3, gray4, gray6 } from '../../constants/styles/variables';
import Heading from '../common/Heading'

const Timeline = ({ items }) => {

    if (!items || !items.length) {
        return null;
    }

    return (
        <Contain>

            <div className='timeline-heading'>
                <Heading size={3}>
                    Experience Timeline
                </Heading>
            </div>

            <div className='timeline'>
            {
                items.map((item, i) => (
                    <div className='timeline-item' key={i}>
                        <div className='timeline-content'>

                            <h3 className='timeline-title' dangerouslySetInnerHTML={{ __html: item.title }} />

                            <span className='timeline-subtitle'>
                                { item.subtitle }
                            </span>

                            <div className='timeline-date'>
                                { item.date }
                            </div>

                            <p>{ item.description }</p>

                        </div>
                    </div>
                ))
            }
            </div>

            <style jsx>{`
                .timeline {
                	list-style-type: none;
                	margin: 1rem auto;
                	max-width: 800px;
                	padding: 2rem 0;
                	position: relative;
                }

                .timeline::after {
                	background-color: ${gray6};
                	content: "";
                	height: 100%;
                	left: 0;
                	position: absolute;
                	top: 0;
                	width: 1px;
                }

                .timeline-heading {
                    text-align: center;
                }

                .timeline-item {
                	padding: 15px 0 15px 25px;
                	position: relative;
                	width: 100%;
                }

            	.timeline-item::after {
            		background-color: #fff;
            		border: 1px solid ${gray6};
            		border-radius: 50%;
            		content: "";
            		display: block;
            		height: 13px;
            		position: absolute;
            		left: -7px;
            		top: 21px;
            		width: 13px;
            		z-index: 2;
            	}

                .timeline-content {
                	background-color: #fff;
                	border: 1px solid ${gray6};
                	border-radius: 3px;
                	display: inline-block;
                	padding: 40px 15px 15px;
                	position: relative;
                	text-align: left;
                }

            	.timeline-content::before {
            		content: "";
            		position: absolute;
            		top: 5px;
            		left: -11px;
            		width: 0;
            		height: 0;
            		border-top: 8px solid transparent;
            		border-right: 10px solid ${gray6};
            		border-bottom: 8px solid transparent;
            	}

                .timeline-content p {
            		color: ${gray3};
            		margin: 0;
            		padding: 0;
                }

                .timeline-date {
                	color: ${gray4};
                	font-size: 0.7em;
                  	font-weight: 500;
                	left: 15px;
                	letter-spacing: 0.15em;
                	position: absolute;
                	text-align: left;
                	text-transform: uppercase;
                	top: 15px;
                	width: 80%;
                }

                .timeline-title {
                    font-size: 1.5em;
                    line-height: 1;
                	margin: 0;
                	padding: 0 0 0.1em;
                }

                .timeline-subtitle {
                	color: ${gray3};
                	display: block;
                	font-size: 1em;
                	font-weight: 500;
                	padding: 0 0 0.6em;
                }

                @media (min-width: ${breakpointMobile}) {
                    .timeline::after {
                        left: 50%;
                        margin-left: 0;
                    }

                    .timeline-item {
                    	padding: 15px 25px 15px 0;
                    	width: 50%;
                    }

                	.timeline-item::after {
                		left: auto;
                		right: -8px;
                	}

                    .timeline-content {
            			padding: 15px;
            		}

        			.timeline-content::before {
        				left: auto;
        				right: -11px;
        				border-left: 10px solid ${gray6};
        				border-right: 0;
        			}

                    .timeline-date {
                    	left: calc(100% + 44px);
                    	top: 7px;
                    }

                    .timeline-item:nth-child(even) {
            			margin-left: 50%;
            			padding: 15px 0 15px 25px;
                    }

            		.timeline-item:nth-child(even)::after {
        				left: -7px;
        				right: 0;
        			}

            		.timeline-item:nth-child(even) .timeline-content::before {
        				border-left: 0;
        				border-right: 10px solid ${gray6};
        				left: -11px;
        				right: auto;
        			}

            		.timeline-item:nth-child(even) .timeline-date {
        				left: auto;
        				right: calc(100% + 44px);
        				text-align: right;
        			}
                }
            `}</style>
        </Contain>
    )

}

export default Timeline
