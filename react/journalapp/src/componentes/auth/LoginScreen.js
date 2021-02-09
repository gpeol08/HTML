import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

	const dispatch = useDispatch()
	const {loading} = useSelector(state => state.ui)

	const [formvalues, inputchange] = useForm({
		email: 'gpeol@hotmail.com',
		password: '123456',
	});
	const { email, password } = formvalues;

	const handleLogin =(e)=>{
		e.preventDefault();
		dispatch(startLoginEmailPassword(email,password))
	}

	const handleGoogle =()=>{
		dispatch(startGoogleLogin());
	}

	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}>
				<input
					value={email}
					onChange={inputchange}
					className="auth__input"
					autoComplete="off"
					type="email"
					placeholder="Email"
					name="email"
				/>

				<input
					value={password}
					onChange={inputchange}
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
				/>

				<button type="submit" className="btn btn-primary btn-block"
				disabled={loading}>
					Login
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks</p>
					<div className="google-btn" onClick={handleGoogle}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link className="link" to="/auth/registrar">
					Create new account
				</Link>
			</form>
		</>
	);
};
