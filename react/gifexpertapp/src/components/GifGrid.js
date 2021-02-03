import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria, index }) => {

	const {data,loading} =useFetchGifs(categoria);

	return (
		<>
			<h4 key={categoria} className='animate__delay-3s'> {categoria} </h4>
			{loading && 'Cargando...'}
			<div className="card-grid">
				{data.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
