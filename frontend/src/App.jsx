import React from 'react';

import ListView from './listView/ListView';
import SingleView from './singleView/SingleView';

export default function App() {
	const [view, setView] = React.useState('List');
	const [currentTask, setCurrentTask] = React.useState('66bd4cf0be0904ec8d78988d');

	switch(view) {
		case 'List': return <ListView setView={setView} setCurrentTask={setCurrentTask} />;
		case 'Single': return <SingleView setView={setView} taskID={currentTask} />;
		default: return null;
	};
}
