import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Comments from './components/Comments';
// import Test from './components/Test';

import './style.css';

const App = () => (
	<>	
		{/* <Test /> */}
		<Comments />
	</>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);