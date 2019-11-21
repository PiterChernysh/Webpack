import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

// import Test from './components/Test';

class App extends Component {
	render() {
		return (
			<>	
				{/* <Test author="жжот" /> */}
				<div className="box">
					<Title />
					<Form author="noname" />
					<List />
				</div>
			</>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);