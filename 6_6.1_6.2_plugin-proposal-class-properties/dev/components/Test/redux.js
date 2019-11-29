import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

// reducer
const reducer = (count = 1000, action) => {
	switch(action.type) {
		case 'INCREMENT': 
			return count + 1;
		case 'DECREMENT': 
			return count - 1;
		default:
			return count;
	}
}

// store
const store = createStore(reducer);

class Counter extends Component {
	increment(num) {
		store.dispatch({
			type: 'INCREMENT',
		});
	}

	decrement(num) {
		store.dispatch({
			type: 'DECREMENT',
		});
	}

	render() {
		return (
			<div
			  style={{
			  	margin: '100px',
			  	display: 'flex',
			  	justifyContent: 'center'
			  }}
			>
				<button
				  onClick={() => this.increment()}
				>
					+1
				</button>
				{store.getState()}
				<button
				  onClick={() => this.decrement()}
				>
					-1
				</button>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(
		<Counter />,
		document.getElementById('app'),
	);
}

render();
store.subscribe(render);