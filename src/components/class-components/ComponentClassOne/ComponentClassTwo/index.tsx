import React from 'react';

export class ClassTwo extends React.Component {
	printComponent() {
		console.log('Component Two Logging');
	}

	render() {
		return (
			<>
				<h2>Class Component Two</h2>
			</>
		);
	}
}
