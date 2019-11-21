import React, { Component } from 'react';

import './style.css';

import picture from './image.jpg';

const Title = () => (
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

export default Title;