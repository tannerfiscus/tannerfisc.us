import React 	   	 from 'react';

const NotFound = (props, context) => {
	return (
		<section className="page-not-found min-vh">

			<div className="align-center">

				<h1><i className="twa twa-anguished"></i><br/>There&#39;s nothing here.</h1>
				<h5>The page you were looking for was not found.</h5>
				<p><a className="button button-inflate button-inverted" href="/">&larr; Back to tannerfisc.us</a></p>

			</div>

		</section>
	);
}

export default NotFound;
