import React, { Component } from 'react';

import Item from '../Item';

class List extends Component {
	render() {
		const { data, removeFromProps, updateFromProps } = this.props;
		return(
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
	}
}

export default List;