import React from 'react';

import List from './List';
import xButtonImage from './xButton.svg';
import './ListView.css';

export default class ListView extends React.Component {
	changeToAddView = () => {
		this.props.setView('Add');
	}

	render() {
		return (
			<div className="ListView">
				  <header className="ListView-header">
					Tasks
					<button className="ListView-header-addButton" type="image">
						<img src={xButtonImage} alt="+" onClick={this.changeToAddView} />
					</button>
				</header>
				<section>
					<List userID="66bc462fe7c703c393ce9c88" setView={this.props.setView} setCurrentTask={this.props.setCurrentTask} />
				  </section>
			</div>
		);
	}
}
