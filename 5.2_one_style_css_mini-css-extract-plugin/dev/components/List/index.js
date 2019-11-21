import React from 'react';

import Item from '../Item';

import './style.css';

const List = ({ data, removeFromProps, updateFromProps }) => (
	<ul className="list">
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