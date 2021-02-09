import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNode } from '../../actions/note';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
	const { name } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(startLogout());
	};

	const handleNew = () => {
		dispatch(startNewNode());
	};

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon"></i>
					{name}
				</h3>

				<button className="btn pointer" onClick={handleLogout}>
					Logout
				</button>
			</div>

			<div className="journal__new-entry" onClick={handleNew}>
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New Entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};
