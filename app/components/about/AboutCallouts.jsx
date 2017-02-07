import { Link }        from 'react-router'
import React           from 'react'
import { scrollToTop } from '../../utils/scroll'

const AboutCallouts = () => (

    <section className='pad-section-large'>

        <div className='grid'>
            <div className='grid-spread-6 grid-flex-3 grid-pad-3'>

                <Link className='button button-inflate button-block'
                      onClick={ scrollToTop }
                      to='/portfolio'>
                    View My Work &rarr;
                </Link>

            </div>
        </div>

        <div className='grid'>
            <div className='grid-spread-6 grid-flex-3 grid-pad-3'>

                <Link className='button button-inverted button-inflate button-block'
                      onClick={ scrollToTop }
                      to='/resume'>
                    View My Resume &rarr;
                </Link>

            </div>
        </div>

    </section>

)

export default AboutCallouts
