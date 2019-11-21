import React, { Component } from 'react';

class Test extends Component {
	constructor() {
		super();

		this.state = {
			isShow: false,
		};

		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow() {
		const { isShow } = this.state;

		this.setState({
			isShow: !isShow,
		});
	}

	render() {
		const { isShow } = this.state;

		return (
			<>
				<button
				  onClick={this.toggleShow}
				>
					show/hide
				</button>
				{
					isShow ? (
						<p>lorem ipsum dolor sit amet</p>
					) : null
				}
			</>
		);
	}
}

export default Test;