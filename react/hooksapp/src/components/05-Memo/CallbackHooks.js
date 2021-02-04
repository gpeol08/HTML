import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	const increment =useCallback((num) => {
		setCounter(c =>   c + num);
	}, [ setCounter ]);
	return (
		<div>
			<h1>useCallbacks Hooks {counter}</h1>
			<hr />

			<ShowIncrement increment={increment} />
		</div>
	);
};
