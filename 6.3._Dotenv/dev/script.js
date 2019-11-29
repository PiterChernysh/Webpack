import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import Comments from './components/Comments';
// import Counter from './components/Counter';
// import Test from './components/Test';

import Music from './components/Music';

import store from './store';
import './style.css';

const App = () => (
	<Provider store={store}>	
		{/* <Test /> */}
		{/* <Counter /> */}
		{/* <Comments /> */}
        <Music />
	</Provider>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);