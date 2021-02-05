import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const Navbar = () => {

	const { user: { name }, dispatch } = useContext(AuthContext);
	const history =useHistory();


	const handlelogout = () => {
		history.replace('/login');
		dispatch({
			type: '[auth] logout',
			payload: {
				logged: false
			}
		})
	}

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
						Marvel
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
						DC
					</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
						Search
					</NavLink>
					<button
					onClick={handlelogout}
						className="nav-item nav-link btn btn-danger" >
						Logout
					</button>

					<span className="nav-item nav-link text-info">
						{name}
					</span>

				</div>
			</div>
		</nav>
	);
};
