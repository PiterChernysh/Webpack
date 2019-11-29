import React, { Component } from 'react';
import { Dispatcher } from 'flux';
import EventEmitter from 'events';

// store
let _count = 1000;

const countStore = Object.assign({}, EventEmitter.prototype, {
	getStore() {
		return _count;
	},
	addEventListener(cb) {
		this.addListener("ololo", cb);
	},
	removeEventListener(cb) {
		this.removeListener("ololo", cb);
	},
	emitStore() {
		this.emit("ololo");
	},
});

// dispatcher
const countDispatcher = new Dispatcher();
countDispatcher.register((action) => {
	if(action.type === 'INCREMENT') {
		_count = _count + 1;
	}

	if(action.type === 'DECREMENT') {
		_count = _count - 1;
	}

	countStore.emitStore();
});

class Counter extends Component {
	constructor() {
		super();

		this.state = {
			count: countStore.getStore(),
		};
	
		this.changeStore = this.changeStore.bind(this);
	}

	componentDidMount() {
		countStore.addEventListener(this.changeStore);
	}

	componentWillUnmount() {
		countStore.removeEventListener(this.changeStore);
	}

	changeStore() {
		this.setState({
			count: countStore.getStore(),
		})
	}

	increment(num) {
		countDispatcher.dispatch({
			type: 'INCREMENT',
		});
	}

	decrement(num) {
		countDispatcher.dispatch({
			type: 'DECREMENT',
		});
	}

	render() {
		const { count } = this.state;
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
				{count}
				<button
				  onClick={() => this.decrement()}
				>
					-1
				</button>
			</div>
		);
	}
}

export default Counter;