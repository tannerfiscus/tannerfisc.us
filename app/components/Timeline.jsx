import React 	   from 'react';

const renderTimeline = (items) => {
	return items.map((item, i) => {
		return renderTimelineItem(item, i);
	});
};

const renderTimelineItem = (item, key) => {
	return (
		<li className="timeline-item" key={key}>
			<div className="timeline-blob">
				<h5 className="timeline-heading" dangerouslySetInnerHTML={{ __html: item.title }}></h5>

				<span className="timeline-subtitle">
					{ item.subtitle }
				</span>

				<p>{ item.description }</p>

				<span className="timeline-date">
					{ item.date }
				</span>
			</div>
		</li>
	);
};

const Timeline = ({ minimized, items }, context) => {

	const modifier = !!minimized ? ' timeline-minimized' : '';

	return (
		<ul className={ 'timeline' + modifier }>

			{ items && items.length > 0 &&
		  	  	renderTimeline(items) }

		</ul>
	);


};

export default Timeline;
