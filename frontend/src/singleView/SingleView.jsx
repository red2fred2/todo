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

	componentDidMount() {
		this.updateTask();
	}

	render() {
		if(this.state.isLoading) return null;

		const dueDate = new Date(this.state.dueDate);

		return (
			<div className="SingleView">
				<header className="SingleView-header">
					<EditButton taskID={this.props.taskID} />
					<div>
						<h2>{this.state.name}</h2>
						<time className="SingleView-header-date">{dueDate.toDateString()}</time>
					</div>
					<XButton taskID={this.props.taskID} />
				</header>
				<section className="SingleView-description">
					{this.state.description}
				</section>
			</div>
		);
	}
}
