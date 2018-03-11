import React 	   		  from 'react'

import { breakpointDesktopMax } from '../../constants/styles/variables'
import { buildAPIUrl } from '../../utils/url'
import PortfolioItem from '../portfolio/PortfolioItem'

class ResumePortfolio extends React.Component {

	constructor(props) {
		super(props)
        this.state = {
            isLoading: true,
            portfolio: [],
        }
	}

    componentDidMount() {
        fetch(buildAPIUrl('/portfolio/'), {
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoading: false,
                portfolio: json,
            })
        })
    }

	render() {
		const { isLoading, portfolio } = this.state

        if (isLoading || !portfolio.length) {
             return (<div>Loading...</div>)
        }

		return (
            <ul className='portfolio-items'>
                {
                    portfolio.map(item => (
                        <PortfolioItem
                            key={item.id}
                            id={item.id}
                            photo={item.photo}
                            tagline={item.tagline}
                            text={item.text}
                            title={item.title}
                        />
                    ))
                }

				<style jsx>{`
					ul {
						margin: 0 auto;
						max-width: ${breakpointDesktopMax};
					}
				`}</style>
            </ul>
		)
	}

}

export default ResumePortfolio
