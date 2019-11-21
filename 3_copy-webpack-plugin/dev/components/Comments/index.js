import React, { Component } from 'react';

import Title from '../Title';
import Form from '../Form';
import List from '../List';

class Comments extends Component {
	constructor() {
		super();

		this.state = {
			listItem: [
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
			],
		};

		this.createItem = this.createItem.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	createItem(item) {
		const { listItem } = this.state;
		this.setState({
			listItem: [item, ...listItem],
		});
	}

	updateItem(item) {
		const { listItem } = this.state;
		this.setState({
			listItem: listItem.map(elem => (
				elem.id === item.id ? item : elem
			))
		});
	}

	removeItem(itemId) {
		const { listItem } = this.state;
		this.setState({
			listItem: listItem.filter(item => item.id !== itemId)
		});
	}

	render() {
		const { listItem } = this.state;

		return (
			<div className="box">
				<Title />
				<Form
				  addFromProps={this.createItem}
				/>
				<List
				  data={listItem}
				  removeFromProps={this.removeItem}
				  updateFromProps={this.updateItem}
				/>
			</div>
		);
	}
}

export default Comments;