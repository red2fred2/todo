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
		this.props.updateListItems();
	}

	render() {
		return (
			<button className="SingleView-header-xButton" type="image" onClick={this.deleteTask}>
				<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
			</button>
		)
	}
}

export default function SingleView() {
	const date = new Date();

	return (
		<div className="SingleView">
			<header className="SingleView-header">
				<EditButton />
				<div>
					<h2>Task Name</h2>
					<time className="SingleView-header-date">{date.toDateString()}</time>
				</div>
				<XButton />
			</header>
			<section className="SingleView-description">
				description
			</section>
		</div>
	);
}
