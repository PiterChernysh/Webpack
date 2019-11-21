import React from 'react';

import Item from '../Item';

import styles from './style.css';

const List = ({ data, removeFromProps, updateFromProps }) => (
	<ul className={styles.list}>
		{
			data.map(item => (
				<Item
				  removeFromList={removeFromProps}
				  updateFromList={updateFromProps}
				  key={item.id}
				  item={item}
				/>
			))
		}
	</ul>
);

export default List;