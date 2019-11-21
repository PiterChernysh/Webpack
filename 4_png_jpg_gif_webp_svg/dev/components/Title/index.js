import React, { Component } from 'react';

import picture from './image.jpg';

class Title extends Component {
	render() {
		return (
			<div className="title">
				<h1>Comments</h1>
				<img
				  style={{
				  	maxWidth: '200px',
				  }}
				  src={picture}
				  alt="Scarlett Johansson"
				/>
			</div>
		);
	}
} 

export default Title;