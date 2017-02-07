import React from 'react'

const _handleClick = (e, onProjectClick, url) => {

    if (typeof onProjectClick === 'function') {
        e.preventDefault()
        onProjectClick(url)
    }

}

const PortfolioList = ({ onProjectClick, projects }) => {

    return (
        <div className='portfolio-list'>

            {
                projects.map(project => (

    				<figure className='portfolio-list-item' key={ project.url }>
    					<a className='portfolio-list-item-link'
                           href={ project.url }
                           onClick={ (e) => _handleClick(e, onProjectClick, project.url) }>

    						<img src={`https://app.tannerfiscus.com/static${project.photo}`} className='portfolio-list-item-image' />

                            <figcaption>
    							<h6 className='portfolio-list-item-tagline'>
    								{ project.tagline }
    							</h6>
    							<h5>{ project.title }</h5>
    							<p className='portfolio-list-item-description'
    							   dangerouslySetInnerHTML={{ __html: project.text }}>
    							</p>
    							<span>
    								More &rarr;
    							</span>
    							<button className='button button-inflate'>More &rarr;</button>
    						</figcaption>

    					</a>
    					<div className='border-box-left'></div>
    					<div className='border-box-top'></div>
    					<div className='border-box-right'></div>
    					<div className='border-box-bottom'></div>
    				</figure>

            	))
            }

        </div>
    )
}

PortfolioList.propTypes = {
    projects: React.PropTypes.array.isRequired,
}

export default PortfolioList
