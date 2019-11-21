import React, { Component } from 'react';

class Test extends Component {
	constructor() {
		super();

		this.state = {
			count: 0,
		};
	}

	changeNum(num) {
		const { count } = this.state;

		this.setState({
			count: count+num,
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
				  onClick={() => this.changeNum(1)}
				>
					+1
				</button>
				{count}
				<button
				  onClick={() => this.changeNum(-1)}
				>
					-1
				</button>
			</div>
		);
	}
}

export default Test;