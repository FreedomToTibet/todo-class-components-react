import React, { Component } from 'react';
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoData: [
				this.createTodoItem('Drink Coffee'),
				this.createTodoItem('Learn React'),
				this.createTodoItem('Build Awesome App'),
			],
			term: '',
			filter: 'all'  //active, all, done
		}
	}

	createTodoItem(label) {
		const itemId = nextId();

		return {
			label,
			important: false,
			done: false,
			id: itemId
		}
	}

	onDeleteItem = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: todoData.filter((el) => el.id !== id)
			};
		});
	};

	onAddItem = (text) => {
		
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArray = [...todoData, newItem];

			return {
				todoData: newArray
			};
		});
	};

	onToggleProperty = (id, propName) => {

		this.setState(({ todoData }) => ({
			todoData: todoData.map(item => {
				if (item.id === id) {
					return {...item, [propName]: !item[propName]}
				}
				return item;
			})
		}))
	}

	onSearchChange = (term) => {
		this.setState({ term });
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	}

	search (items, term) {

		if (!term) {return items;}

		return items.filter((item) =>  {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	}

	filter (items, filter) {
		switch (filter) {
			case 'all': return items;
			case 'active': return items.filter(item => !item.done);
			case 'done': return items.filter(item => item.done);
			default: return items;
		}
	}

	
	render() {

		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter(this.search(todoData, term),  filter);

		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.filter((el) => !el.done).length;

		return (
				<div className="todo-app">
					<AppHeader toDo={todoCount} done={doneCount} />
					<div className="top-panel d-flex">
						<SearchPanel
							onSearchChange = { this.onSearchChange } />
						<ItemStatusFilter
							filter={ filter } 
							onFilterChange = { this.onFilterChange } />
					</div>

					<TodoList 
						todos = { visibleItems } 
						onDeleted = { this.onDeleteItem }
						onToggleProperty = { this.onToggleProperty }
				 />
					<ItemAddForm onAddedItem = { this.onAddItem } />
				</div>
			);
	}
}

export default App;