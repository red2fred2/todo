import React from 'react';

import ListItem from './ListItem';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			tasks: []
		};
	}

	updateListItems = async () => {
		let res = await fetch(`https://test.red2fred2.com/api/userTasks/${this.props.userID}`);
		let json = await res.json();

		this.setState({isLoading: false, tasks: json});
	}

	componentDidMount() {
		this.updateListItems();
	}

	render() {
		if(this.state.isLoading) return null;

		const listItems = this.state.tasks.map(task => <ListItem name={task.name} taskID={task._id} updateListItems={this.updateListItems} setView={this.props.setView} setCurrentTask={this.props.setCurrentTask} key={task._id} />);

		return (
			<ol>
				{listItems}
			</ol>
		);
	}
}
