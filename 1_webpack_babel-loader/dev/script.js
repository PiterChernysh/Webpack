import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';


class App extends Component {
	render() {
		return (
			<div>
				<Title />
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);