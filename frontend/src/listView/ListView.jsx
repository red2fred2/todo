import React from 'react';

import List from './List';
import xButtonImage from './xButton.svg';
import './ListView.css';

export default function ListView(props) {
	return (
		<div className="ListView">
	  		<header className="ListView-header">
				Tasks
				<button className="ListView-header-addButton" type="image">
					<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
				</button>
			</header>
			<section>
				<List userID="66bc462fe7c703c393ce9c88" setView={props.setView} setCurrentTask={props.setCurrentTask} />
	  		</section>
		</div>
	);
}
