import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onSearchChange = (e) => {
		const { onSearchChange } = this.props;

		this.setState({ term: e.target.value });
		onSearchChange(e.target.value);
	};

	render() {

		const { term } = this.state;
		return (
			<input type="text"
								className="form-control search-input"
								placeholder="type to search"
								value={ term }
								onChange = { this.onSearchChange } />
		);
	}
}

export default SearchPanel;