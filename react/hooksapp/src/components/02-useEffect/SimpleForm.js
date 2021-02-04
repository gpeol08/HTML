import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = state;

	useEffect(() => {}, []);

	useEffect(() => {}, [state]);

	useEffect(() => {}, [email]);

	const handleChange = ({ target }) => {
		setState({
			...state,
			[target.name]: target.value,
		});
	};
	return (
		<>
			<h1>Use Effect</h1>
			<hr />
			<div>
				<input type="text" name="name" autoComplete="off" value={name} onChange={handleChange} />
				<input type="email" name="email" autoComplete="off" value={email} onChange={handleChange} />
			</div>
			{name === '123' && <Message />}
		</>
	);
};
