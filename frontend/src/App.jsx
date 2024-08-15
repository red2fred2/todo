import React from 'react';

import ListView from './listView/ListView';
import SingleView from './singleView/SingleView';

const Views = {
	List: Symbol('List'),
	Single: Symbol('Single')
}

export default function App() {
	const [view, setView] = React.useState(Views.Single);
	const [currentTask, setCurrentTask] = React.useState('66bd4cf0be0904ec8d78988d');

	switch(view) {
		case Views.List: return <ListView setView={setView} setCurrentTask={setCurrentTask} />;
		case Views.Single: return <SingleView setView={setView} taskID={currentTask} />;
		default: return null;
	};
}
