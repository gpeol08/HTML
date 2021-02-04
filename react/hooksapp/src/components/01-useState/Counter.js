import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {
	const [state, setCount] = useState({
		counter1: 10,
		counter2: 20,
    });
    
    const {counter1,counter2}=state;
	return (
		<>
			<h1>Counter 1 {counter1}</h1>
			<h1>Counter 2 {counter2}</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => setCount({...state,counter1:counter1+1})}>
				counter 1 +1
			</button>

			<button className="btn btn-primary" onClick={() => setCount({...state,counter2:counter2+1})}>
				counter 2 +1
			</button>
		</>
	);
};
