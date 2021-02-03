import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(['One Punch']);

	return (
		<>
			<h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
			<hr />
			<ol key="Expert">
				{categorias.map((item) => (
					<GifGrid key={item} categoria={item} />
				))}
			</ol>
		</>
	);
};
