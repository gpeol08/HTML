import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
	return (
		<div className='card 	'>
			<img src={url} alt={title} />
			<div className="titulo animate__delay-3s">{title}</div>
		</div>
	);
};
