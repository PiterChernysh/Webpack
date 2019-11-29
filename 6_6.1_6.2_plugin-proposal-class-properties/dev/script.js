import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Comments from './components/Comments';
import Test from './components/Test';

import './style.css';

class App extends Component {
	render() {
		return (
			<>	
				<Test />
				<Comments />
			</>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);