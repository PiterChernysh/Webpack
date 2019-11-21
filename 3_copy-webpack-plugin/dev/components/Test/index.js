import React, { Component } from 'react';

class Inner extends Component {
	constructor(props) {
		super();

		this.state = {
			value: props.count,
		};

		this.handleChange = this.handleChange.bind(this);
		a: "hello"

		console.log('constructor');
	}

	// componentWillMount() {
	// 	console.log('componentWillMount');
	// }

	componentDidMount() {
		console.log('componentDidMount');

		// this.ololo = setInterval(this.timer, 1000);
	}

	// timer() {
	// 	console.log('ololo');
	// }

	// componentWillReceiveProps(nextProps) {
	// 	console.log('componentWillReceiveProps');
	// }

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('componentWillUpdate');
	// }

	static getDerivedStateFromProps(nextProps, state) {
		console.log('getDerivedStateFromProps');
		console.log('nextProps', nextProps);
		if (nextProps.count > 2) {
			return null;
		}

		if (nextProps.count !== state.value) {
			return {
				value: nextProps.count,
			}
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		return true;
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		// clearInterval(this.ololo);
	}

	handleChange() {
		const { value } = this.state;
		this.setState({
			value: value+1,
		});
	}

	render() {
		console.log('render');
		const { value } = this.state;
		const { count } = this.props;
		return (
			<div>
				<button
				  onClick={this.handleChange}
				>
					{value} from state
				</button>
				<div>{count} from props</div>
			</div>
		)
	}
}

class Wrapper extends Component {
	constructor() {
		super();

		this.state = {
			handleShowInner: false,
			count: 0,
		};

		this.handleInner = this.handleInner.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleInner() {
		const { handleShowInner } = this.state;
		this.setState({
			handleShowInner: !handleShowInner,
		});
	}

	handleChange() {
		const { count } = this.state;
		this.setState({
			count: count+1,
		});
	}

	render() {
		const { count, handleShowInner } = this.state;
		return (
			<div>
				<button
				  onClick={this.handleChange}
				>
					{count}
				</button>
				<button
				  onClick={this.handleInner}
				>
					handle inner
				</button>
				{
					handleShowInner ? (
						<Inner count={count} />
					) : null
				}
			</div>
		)
	}
}

export default Wrapper;