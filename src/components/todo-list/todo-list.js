import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleProperty }) => {

	const elements = todos.map(item => {

		const {id, ...itemProps} = item;
		
		return (
			<li key = {id} className='list-group-item'>
				<TodoListItem 
					{...itemProps} 
					onDeleted={ () => onDeleted(id) }
					onToggleProperty = { (e) => onToggleProperty(id, e.currentTarget.getAttribute('data-toggle')) }
				/>
			</li>
		)
	});

	return (
		<ul className='list-group todo-list'>
			{elements}
		</ul>
	);
};

export default TodoList;