import React from 'react';
import { TodoListItem } from './TodoListItem';

import PropTypes from 'prop-types';

export const TodoList = ({todos,handleDelete,handleToggle}) => {
	return (
		<ul>
			{todos.map((todo, i) => (
                <TodoListItem 
                        key={todo.id}
                        todo={todo} 
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}/>
			))}
		</ul>
	);
};


TodoList.propTypes={
    handleDelete:PropTypes.func.isRequired,
    handleToggle:PropTypes.func.isRequired
}