import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {


	const {dispatch} = useContext(AuthContext);

	const handleClick = () => {

		const last = localStorage.getItem('path') || '/';
		history.replace(last);
		dispatch({
			type:types.login,
			payload:{
				name:'Guadalupe Olivas'
			}
		})
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />

			<button onClick={handleClick} className="btn btn-primary">
				Login
			</button>
		</div>
	);
};
