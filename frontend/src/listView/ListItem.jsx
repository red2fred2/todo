import React from 'react';

import './ListItem.css';
import xButtonImage from './xButton.svg';

class XButton extends React.Component {
	deleteTask = async () => {
		await fetch(`https://test.red2fred2.com/api/deleteTask/${this.props.taskID}`, {method: 'DELETE'});
		this.props.updateListItems();
	}

	render() {
		return (
			<button className="ListItem-xButton" type="image" onClick={this.deleteTask}>
				<img src={xButtonImage} alt="X"/>
			</button>
		)
	}
}

export default class ListItem extends React.Component {
	setSingleView = taskID => () => {
		this.props.setCurrentTask(taskID);
		this.props.setView('Single');
	};

	render() {
		return (
			<li className="ListItem">
				<div onClick={this.setSingleView(this.props.taskID)}>{this.props.name}</div>
				<XButton taskID={this.props.taskID} updateListItems={this.props.updateListItems} />
			</li>
		);
	}
}
