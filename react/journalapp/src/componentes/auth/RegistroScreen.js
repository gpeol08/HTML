import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const RegistroScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const [values, change] = useForm({
		name: 'Guadalupe Olivas',
		email: 'gpeol@hotmail.com',
		password: '123456',
		password2: '123456',
	});
	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormvalid()) {
			dispatch(startRegister(email, password, name));
		}
	};

	const isFormvalid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('El nombre es obligatorio'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('El email no tiene formato valido'));
			return false;
		} else if (password !== password2 || password.length < 6) {
			console.log('pas');
			dispatch(setError('Las contraseñas no son iguales o su longitud es corta'));
			return false;
		}
		dispatch(removeError());
		return true;
	};
	const { name, email, password, password2 } = values;
	return (
		<>
			<h3 className="auth__title">Registrar</h3>

			<form onSubmit={handleRegister}>
				{msgError && <div className="auth_alert-error">{msgError}</div>}
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
