import React, { Component } from 'react';

import Item from '../Item';

class List extends Component {
	render() {
		return(
			<ul className="list">
				<Item
				  author="Николай"
				  text="олололололололо"
				/>
				<Item
				  author="Юрий"
				/>
				<Item
				  text="текст"
				/>
			</ul>
		);
	}
}

export default List;