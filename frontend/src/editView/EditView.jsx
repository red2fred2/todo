import React from 'react';

import './EditView.css';
import confirmButtonImage from './confirmButton.svg';

class ConfirmButton extends React.Component {
	updateTask = async () => {

	}

	render() {
		return (
			<button className="EditView-header-editButton" type="image" onClick={this.updateTask}>
				<img src={confirmButtonImage} alt="Confirm"/>
			</button>
		)
	}
}

export default class EditView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			name: undefined,
			description: undefined,
			dueDate: undefined
		};
	}

	updateTask = async () => {
		let res = await fetch(`https://test.red2fred2.com/api/task/${this.props.taskID}`);
		let json = await res.json();

		this.setState({
			isLoading: false,
			name: json.name,
			description: json.description,
			dueDate: json.dueDate
		});
	}

	getDueDateString = () => {
		const dueDate = new Date(this.state.dueDate);
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

	componentDidMount() {
		this.updateTask();
	}

	render() {
		if(this.state.isLoading) return null;

		return (
			<div className="EditView">
				<header className="EditView-header" onClick={this.backToListView}>
					Tasks
				</header>
				<section className="EditView-title-container">
					<div className="EditView-title">
						<div/>
						<div>
							<input type="text" placeholder={this.state.name} />
							<br/>
							<input type="date" defaultValue={this.getDueDateString()} />
						</div>
						<ConfirmButton taskID={this.props.taskID} setView={this.props.setView} setCurrentTask={this.props.setCurrentTask} />
					</div>
				</section>
				<section className="EditView-description">
					<textarea placeholder={this.state.description} rows="5"/>
				</section>
			</div>
		);
	}
}
