import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import picture from './image.jpg';

const Title = () => (
	<div className={css(styles.title)}>
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

const styles = StyleSheet.create({
	title: {
    	margin: 0,
    	padding: '40px',
    	'text-align': 'center',
    	'border-bottom': '3px solid',
    	'background-color': '#10689a',
    },
});

export default Title;