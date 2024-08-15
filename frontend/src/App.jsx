import React from 'react';

import ListView from './listView/ListView';

const Views = {
	List: Symbol('List')
}

export default function App() {
	const [view, setView] = React.useState(Views.List);

	switch(view) {
		case Views.List: return <ListView setView={setView} />;
		default: return null;
	};
}
