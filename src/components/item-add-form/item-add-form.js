import React, { Component } from "react";

import "./item-add-form.css";

class ItemAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			label: ''
		}
	}

	onChangeValue = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		const { onAddedItem } = this.props;
		const { label } = this.state;

		e.preventDefault();

		if (!label) return;

		onAddedItem(label);
		this.setState({
			label: ''
		})

	};


	render() {

		const { label } = this.state;

		return (
			<form className="item-add-form d-flex"
						onSubmit = { this.onSubmit }>
				<input type="text"
							 className="form-control"
							 placeholder="My next to-do"
							 name="label"
							 value={ label }
							 minLength="3"
							 required
							 onChange = { this.onChangeValue } />
				<button type="submit" 
								className="btn btn-outline-secondary"
				>Add</button>
			</form>
		)
	}
}

export default ItemAddForm;