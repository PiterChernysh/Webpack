import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

import Item from '../Item';

const List = ({ comments }) => (
	<ul className={styles.list}>
		{
			comments.map(item => (
				<Item
				  key={item.id}
				  item={item}
				/>
			))
		}
	</ul>
);

const mapStateToProps = store => ({ comments: store });

export default connect(
	mapStateToProps
)(List);