import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';
import '../../index.css';

export const MultipleHooks = () => {
	const { counter, increment } = useCouter(1);
	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { author, quote } = !!data && data[0];
	return (
		<div>
			<h1> BreakingBad Quotes </h1> <hr />
			{loading ? (
				<div> Loading... </div>
			) : (
				<blockquote>
					<p> {quote} </p> <footer> {author} </footer>{' '}
				</blockquote>
			)}
			<button onClick={() => increment()}> Next Quote </button>{' '}
		</div>
	);
};
