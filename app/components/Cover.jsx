import React 	from 'react';

const getClasses = (coverImage, coverPortfolio, coverHomePage, coverWithTitle) => {
	let classes = [ 'cover' ];

	if (!!coverImage) { classes.push('cover-image') }
	if (!!coverPortfolio) { classes.push('cover-portfolio') }
	if (!!coverHomePage) { classes.push('cover-home-page') }
	if (!!coverWithTitle) { classes.push('cover-with-title') }

	return classes.join(' ');
};

const renderImage = (image, imageData = {}) => {
	return (
		<img src={image} {...imageData} />
	);
};

const renderTitle = (title) => {
	return (
		<h1>
			{ title }
		</h1>
	);
}

const Cover = (props, context) => {
	let classes = getClasses(props.coverImage,
							 props.coverPortfolio,
							 props.coverHomePage,
							 !!props.title);

	// Background image
	let styles = props.backgroundImage ?
		      	{ backgroundImage: `url('${ props.backgroundImage }')` } : {};
	// Background color
	styles = props.background ? { ...styles, backgroundColor: props.background } : styles;

	return (
		<section className={classes} style={styles}>

			{ props.title &&
				renderTitle(props.title) }

			{ props.image &&
				renderImage(props.image,
							props.imageData) }

		</section>
	);
}

export default Cover;
