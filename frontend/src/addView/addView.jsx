import React from 'react';

import './addView.css';
import confirmButtonImage from './confirmButton.svg';

export default class AddView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			dueDate: new Date()
		};
	}

	addTask = async () => {
		let query = new URLSearchParams();
		query.append('name', this.state.name);
		query.append('description', this.state.description);
		query.append('dueDate', this.state.dueDate);
		query.append('owner', '66bc462fe7c703c393ce9c88');

		await fetch(`https://test.red2fred2.com/api/createTask?${query.toString()}`, {method: 'POST'});
		this.props.setView('List');
	}

	getDueDateString = () => {
		const dueDate = new Date();
		const year = dueDate.getFullYear();
		let month = dueDate.getMonth()+1;
		month = month < 10 ? '0'+month : month;
		let day = dueDate.getDate();
		day = day < 10 ? '0'+day : day;

		return `${year}-${month}-${day}`;
	}

	backToListView = () => {
		this.props.setView('List');
	}

	changeName = event => {
		this.setState({name: event.target.value});
	}

	changeDescription = event => {
		this.setState({description: event.target.value});
	}

	changeDueDate = event => {
		this.setState({dueDate: event.target.value.toString()});
	}

	render() {
		return (
			<div className="AddView">
				<header className="AddView-header" onClick={this.backToListView}>
					Tasks
				</header>
				<section className="AddView-title-container">
					<div className="AddView-title">
						<div/>
						<div>
							<input type="text" placeholder="Task Name" onChange={this.changeName} />
							<br/>
							<input type="date" defaultValue={this.getDueDateString()} onChange={this.changeDueDate} />
						</div>
						<button className="AddView-header-editButton" type="image" onClick={this.addTask}>
							<img src={confirmButtonImage} alt="Confirm"/>
						</button>
					</div>
				</section>
				<section className="AddView-description">
					<textarea placeholder="Task description." rows="5" onChange={this.changeDescription} />
				</section>
			</div>
		);
	}
}
