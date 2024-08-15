import React from 'react';

import './SingleView.css';
import xButtonImage from './xButton.svg';
import editButtonImage from './editButton.png';

class EditButton extends React.Component {
	editTask = async () => {

	}

	render() {
		return (
			<button className="SingleView-header-editButton" type="image" onClick={this.deleteTask}>
				<img src={editButtonImage} viewBox="0 0 50 50" alt="X"/>
			</button>
		)
	}
}

class XButton extends React.Component {
	deleteTask = async () => {
		await fetch(`https://test.red2fred2.com/api/deleteTask/${this.props.taskID}`, {method: 'DELETE'});
		this.props.setView('List');
	}

	render() {
		return (
			<button className="SingleView-header-xButton" type="image" onClick={this.deleteTask}>
				<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
			</button>
		)
	}
}

export default class SingleView extends React.Component {
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

	backToListView = () => {
		this.props.setView('List');
	}

	componentDidMount() {
		this.updateTask();
	}

	render() {
		if(this.state.isLoading) return null;

		const dueDate = new Date(this.state.dueDate);

		return (
			<div className="SingleView">
				<header className="SingleView-header" onClick={this.backToListView}>
					Tasks
				</header>
				<section className="SingleView-title-container">
					<div className="SingleView-title">
						<EditButton taskID={this.props.taskID} setView={this.props.setView} setCurrentTask={this.props.setCurrentTask} />
						<div>
							<h2>{this.state.name}</h2>
							<time className="SingleView-title-date">{dueDate.toDateString()}</time>
						</div>
						<XButton taskID={this.props.taskID} setView={this.props.setView} />
					</div>
				</section>
				<section className="SingleView-description">
					{this.state.description}
				</section>
			</div>
		);
	}
}
