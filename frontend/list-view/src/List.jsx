import React from 'react';

import ListItem from './ListItem';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			userID: props.userID,
			tasks: []
		};
	}

	getListItems = async () => {
		let res = await fetch(`http://192.168.86.193:3050/userTasks/${this.state.userID}`);
		let json = await res.json();

		this.setState({isLoading: false, tasks: json});
	}

	componentDidMount() {
		this.getListItems();
	}

	render() {
		const {isLoading} = this.state;

		if(isLoading) return null;

		const listItems = this.state.tasks.map(task => <ListItem name={task.name} key={task._id} />);

		return (
			<ol>
				{listItems}
			</ol>
		);
	}
}
