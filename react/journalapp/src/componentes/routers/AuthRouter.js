import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegistroScreen } from '../auth/RegistroScreen';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />
					<Route exact path="/auth/registrar" component={RegistroScreen} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
