import React from 'react';

import './ListItem.css';
import xButtonImage from './xButton.svg';

class Xbutton extends React.Component {
	deleteTask = async () => {
		await fetch(`https://test.red2fred2.com/api/deleteTask/${this.props.taskID}`, {method: 'DELETE'});
		this.props.updateListItems();
	}

	render() {
		return (
			<button className="ListItemXButton" type="image" onClick={this.deleteTask}>
				<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
			</button>
		)
	}
}

export default function ListItem(props) {
	return (
		<li className="ListItem">
			{props.name}
			<Xbutton taskID={props.taskID} updateListItems={props.updateListItems} />
		</li>
	);
}
