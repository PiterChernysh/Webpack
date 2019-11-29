import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Title from '../Title';
import Form from '../Form';
import List from '../List';

import store from '../../store';
import styles from './style.css';

const Comments = () => (
	<Provider store={store}>
		<div className={styles.wrapper}>
			<Title />
			<Form />
			<List />
		</div>
	</Provider>
);

export default Comments;