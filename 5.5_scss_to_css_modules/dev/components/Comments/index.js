import React, { useState } from 'react';

import Title from '../Title';
import Form from '../Form';
import List from '../List';

import styles from './style.scss';

const DEFAULT_COMMENTS = [
	{
		id: 1,
		author: 'Николай',
		text: 'олололололололо',
	},
	{
		id: 2,
		author: 'Юрий',
		text: 'Всем привет!',
	},
	{
		id: 3,
		author: 'Юрий1',
		text: 'Всем привет2!',
	},
	{
		id: 4,
		author: 'test',
		text: 'from app',
	},
];

const Comments = () => {
	const [listItem, changeList] = useState(DEFAULT_COMMENTS);

	const createItem = (item) => {
		changeList([item, ...listItem]);
	};

	const updateItem = (item) => {
		changeList(listItem.map(elem => elem.id === item.id ? item : elem ));
	};

	const removeItem = (itemId) => {
		changeList(listItem.filter(item => item.id !== itemId));
	};

	return (
		<div className={styles.wrapper}>
			<Title />
			<Form
			  addFromProps={createItem}
			/>
			<List
			  data={listItem}
			  removeFromProps={removeItem}
			  updateFromProps={updateItem}
			/>
		</div>
	);
}

export default Comments;