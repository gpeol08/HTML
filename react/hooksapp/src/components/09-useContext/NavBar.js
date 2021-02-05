import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="navbar-nav">
				<NavLink exact activeClassName="active" className="nav-item nav-link" to="./">
					Home
				</NavLink>
				<NavLink exact activeClassName="active" className="nav-item nav-link" to="./About">
					About
				</NavLink>
				<NavLink exact activeClassName="active" className="nav-item nav-link" to="./Login">
					Login
				</NavLink>
			</div>
		</nav>
	);
};

/* <nav>
<ul>
    <li> <Link to='./'>Home</Link> </li>
    <li><Link to='./Login'>Login</Link></li>
    <li><Link to='./About'>About</Link></li>
</ul>
</nav> */
