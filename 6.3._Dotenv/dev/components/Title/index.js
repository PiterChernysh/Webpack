import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setComments } from '../../actions/comments';
import styles from './style.css';

import picture from './image.jpg';

const Title = () => (
	<div className={styles.title}>
		<h1>Comments</h1>
		<img
		  style={{
		  	maxWidth: '200px',
		  }}
		  onClick={() => {
		  	this.props.setComments()
		  	// this.props.comments.length
		  	// 	? this.props.removeComment(this.props.comments[0].id)
		  	// 	: null
		  }}
		  src={picture}
		  alt="Scarlett Johansson"
		/>
	</div>
);

export default connect(store => ({ comments: store }), { setComments })(Title);