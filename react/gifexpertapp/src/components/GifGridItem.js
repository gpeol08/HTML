import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
	return (
		<div className='card 	'>
			<img src={url} alt={title} />
			<label className="titulo animate__delay-3s">{title}</label>
		</div>
	);
};

GifGridItem.propTypes={
	title: PropTypes.string.isRequired,
	url:PropTypes.string.isRequired
}


