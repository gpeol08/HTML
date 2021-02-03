import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';
export const useFetchGifs = (categoria) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
        getGif(categoria)
        .then(img=> setState({
            data:img,
            loading:false
        }))
	}, [categoria]);

	return state;
};
