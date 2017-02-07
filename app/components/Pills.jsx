import React from 'react';

const Pills = ({ items }) => {

	const renderPills = (items) => {
		return items.map((item) => {
			return (
				<li className="pill" key={ item }>
					{ item }
				</li>
			);
		})
	}

	return (
		<ul className="pill-container">
			{ renderPills(items) }
		</ul>
	);
}

export default Pills;
