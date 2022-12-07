import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {
		
	const { label, onDeleted, onToggleProperty, important, done } = props;

	let classNames = "todo-list-item";

	return (
		<span className={ `${classNames} ${done ? "done" : ""} ${important ? "important" : ""}` }>
			<span
				className="todo-list-item-label"
				onClick={ onToggleProperty } 
				data-toggle="done">
				{label}
			</span>

			<button type="button"
							className="btn btn-outline-success btn-sm float-end"
							onClick={ onToggleProperty } 
							data-toggle="important">
				<i className="fa-solid fa-exclamation" />
			</button>

			<button type="button"
							className="btn btn-outline-danger btn-sm float-end"
							onClick={ onDeleted }>
				<i className="fa fa-trash" />
			</button>
		</span>
	);
}


export default TodoListItem;