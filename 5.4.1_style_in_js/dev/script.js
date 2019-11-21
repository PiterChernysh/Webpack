import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

import './style.css';

const App = () => (
	<>	
		
		<Title />
	</>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);