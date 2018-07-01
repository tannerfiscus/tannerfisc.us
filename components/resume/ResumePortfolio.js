import dynamic from 'next/dynamic'
import React from 'react'

import { breakpointDesktopMax } from '../../constants/styles/variables'
import Loading from '../common/Loading';
import PortfolioItem from '../portfolio/PortfolioItem'

const ResumePortfolio = () => {

	const DynamicPortfolio = dynamic(
        import('../portfolio/DynamicPortfolio'),
        {
            loading: Loading,
            ssr: false,
        }
    )

	return (
		<div className='resume-portfolio'>

			<DynamicPortfolio />

			<style jsx>{`
				.resume-portfolio {
					margin: 0 auto;
					max-width: ${breakpointDesktopMax};
				}
			`}</style>
		</div>
	)

}

export default ResumePortfolio
