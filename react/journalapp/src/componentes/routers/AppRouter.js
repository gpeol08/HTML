import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setchecking] = useState(true);
	const [isLoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
			}
			setchecking(false);
		});
	}, [dispatch, setchecking, setLoggedIn]);

	if (checking) {
		return <h1>Please wait...</h1>;
	} else {
		return (
			<Router>
				<Switch>
					<PublicRoute isAutenticated={isLoggedIn} path="/auth" component={AuthRouter} />
					<PrivateRoute isAutenticated={isLoggedIn} path="/" component={JournalScreen} />
					<Redirect to="/auth/login" />
				</Switch>
			</Router>
		);
	}
};
