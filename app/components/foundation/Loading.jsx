import React from 'react'

const Loading = (props, context) => {

	return (
		<figure className='loading'>

			<ul className='loading-circles'>
			  <li className='loading-circle-1'></li>
			  <li className='loading-circle-2'></li>
			  <li className='loading-circle-3'></li>
			</ul>

			<figcaption>Loading...</figcaption>

		</figure>
	)

}

export default Loading
