import React from 'react';

import EditView from './editView/EditView';
import ListView from './listView/ListView';
import SingleView from './singleView/SingleView';

export default function App() {
	const [view, setView] = React.useState('List');
	const [currentTask, setCurrentTask] = React.useState(undefined);

	switch(view) {
		case 'Edit': return <EditView setView={setView} taskID={currentTask} />;
		case 'List': return <ListView setView={setView} setCurrentTask={setCurrentTask} />;
		case 'Single': return <SingleView setView={setView} setCurrentTask={setCurrentTask} taskID={currentTask} />;
		default: return null;
	};
}
