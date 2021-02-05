import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const Navbar = () => {

	const {user:{name}} = useContext(AuthContext);

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
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">
						Logout
					</NavLink>

					<span className="nav-item nav-link text-info">
{name}
					</span>

				</div>
			</div>
		</nav>
	);
};
