import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegistroScreen = () => {
	const [values, change] = useForm({
		name: 'Guadalupe Olivas',
		email: 'gpeol.mh2021@gmail.com',
		password: '123456',
		password2: '123456',
	});
	const handleRegister = (e) => {
		e.preventDefault();
		console.log(name, email, password, password2);
	};

	const isFormvalid = () => {
		if (name.trim().length === 0) {
		}
	};
	const { name, email, password, password2 } = values;
	return (
		<>
			<h3 className="auth__title">Registrar</h3>

			<form onSubmit={handleRegister}>
				<div className="auth_alert-error">Hello</div>
				<input
					value={name}
					onChange={change}
					className="auth__input"
					autoComplete="off"
					type="text"
					placeholder="Nombre"
					name="name"
				/>

				<input
					value={email}
					onChange={change}
					className="auth__input"
					autoComplete="off"
					type="email"
					placeholder="Email"
					name="email"
				/>

				<input
					value={password}
					onChange={change}
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
				/>

				<input
					value={password2}
					onChange={change}
					className="auth__input"
					type="password"
					placeholder="Confirmar Password"
					name="password2"
				/>

				<button type="submit" className="btn btn-primary btn-block mb-5">
					Registrar
				</button>

				<Link className="link" to="/auth/login">
					Already registered?
				</Link>
			</form>
		</>
	);
};
