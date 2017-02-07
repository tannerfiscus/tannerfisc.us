import Cover	   	 from '../Cover.jsx';
import PageContent 	 from '../foundation/PageContent.jsx';
import React 	   	 from 'react';

const Freelance = (props, context) => {

	return (
		<section className="page-about">

			<Cover title="Want to work together?"
				backgroundImage="/assets/freelance-graphic.jpg" />

			<PageContent>

				<section className="pad-section-large">
					<h2 className="align-center">
						I do, too.
					</h2>
					<h5 className="align-center">
						But, unfortunately, my availability is very limited.
					</h5>
				</section>

				<section className="pad-section-large grid">
					<div className="grid-spread-6 grid-flex-3 grid-pad-3">
						<p className="align-center">
							If you&#39;d like to work together on a project and have a flexible deadline, please feel free to get in touch with me. I&#39;m not currently accepting new work, but will consider requests that do not have an immediate deadline. Cheers, friends. <i className="twa twa-beers"></i>
						</p>
					</div>
				</section>


				<section className="pad-section-large grid">
					<div className="grid-spread-4 grid-flex-4 grid-pad-4">
						<a className="button button-inflate button-block"
						   href="/contact/">
							Let&#39;s Get In Touch
						</a>
					</div>
				</section>

			</PageContent>

		</section>
	);

}

export default Freelance;
