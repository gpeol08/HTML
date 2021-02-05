import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useForm } from '../../hooks/useForm';
export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	const [values, handleInputChange] = useForm({
		id: '',
		nombre: '',
		email: '',
		token: '',
	});

	const { id, nombre, email, token } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(values);
	};
	return (
		<div>
			<div>
				<h1>Login Screen</h1>
				<hr />
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>ID</label>
						<input type="text" className="form-control" name="id" value={id} onChange={handleInputChange} />
					</div>
					<div className="form-group">
						<label>Nombre</label>
						<input type="text" className="form-control" name="nombre" value={nombre} onChange={handleInputChange} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" name="email" value={email} onChange={handleInputChange} />
					</div>
					<div className="form-group">
						<label>Token</label>
						<input type="text" className="form-control" name="token" value={token} onChange={handleInputChange} />
					</div>

                    <button className='btn btn-primary mt-1'>Guardar</button>
				</form>
			</div>
		</div>
	);
};
