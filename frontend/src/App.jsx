import React from 'react';

import ListView from './listView/ListView';
import SingleView from './singleView/SingleView';

const Views = {
	List: Symbol('List'),
	Single: Symbol('Single')
}

export default function App() {
	const [view, setView] = React.useState(Views.Single);

	switch(view) {
		case Views.List: return <ListView setView={setView} />;
		case Views.Single: return <SingleView setView={setView} />;
		default: return null;
	};
}
