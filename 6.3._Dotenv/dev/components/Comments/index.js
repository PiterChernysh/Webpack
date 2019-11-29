import React, { Component } from 'react';

import Title from '../Title';
import Form from '../Form';
import List from '../List';

import styles from './style.css';

const Comments = () => (
	<div className={styles.wrapper}>
		<Title />
		<Form />
		<List />
	</div>
);

export default Comments;