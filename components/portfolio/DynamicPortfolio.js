// This component will be dynamically imported so that not all of the
// project data is bundled into the main app bundle.
import React from 'react'

import portfolio from '../../projects/all';
import PortfolioItem from './PortfolioItem'

const DynamicPortfolio = () => {
    console.log('portfolio!', portfolio)

    return (
        <ul className='portfolio-items'>
            {
                portfolio.map(item => (
                    <PortfolioItem
                        key={item.id}
                        id={item.id}
                        photo={item.photos.display ? item.photos.display.url : null}
                        tagline={item.tagline}
                        text={item.descriptions[0].text}
                        title={item.title}
                    />
                ))
            }

            <style jsx>{`
                .portfolio-items {
                    display: block;
                    margin: 0 -1rem;
                }
            `}</style>
        </ul>
    )

}

export default DynamicPortfolio
