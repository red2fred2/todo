import React from 'react';

import './EditView.css';
import confirmButtonImage from './confirmButton.svg';

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

	patchTask = async () => {
		let query = new URLSearchParams();
		query.append('name', this.state.name);
		query.append('description', this.state.description);
		query.append('dueDate', this.state.dueDate);

		await fetch(`https://test.red2fred2.com/api/updateTask/${this.props.taskID}?${query.toString()}`, {method: 'PATCH'});
		this.props.setView('Single');
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

	changeName = event => {
		this.setState({name: event.target.value});
	}

	changeDescription = event => {
		this.setState({description: event.target.value});
	}

	changeDueDate = event => {
		this.setState({dueDate: event.target.value.toString()});
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
							<input type="text" placeholder={this.state.name} onChange={this.changeName} />
							<br/>
							<input type="date" defaultValue={this.getDueDateString()} onChange={this.changeDueDate} />
						</div>
						<button className="EditView-header-editButton" type="image" onClick={this.patchTask}>
							<img src={confirmButtonImage} alt="Confirm"/>
						</button>
					</div>
				</section>
				<section className="EditView-description">
					<textarea placeholder={this.state.description} rows="5" onChange={this.changeDescription} />
				</section>
			</div>
		);
	}
}
