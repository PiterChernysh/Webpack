import React, { Component } from 'react';

class Item extends Component {
	render() {
		const { author, text } = this.props;

		return (
			<li className="item">
				<header className="item__head">
			        <h3 className="item__title">{author}</h3>
			        <div className="item__action">
			            <button className="button button--small">edit</button>
			            <button className="button button--small">delete</button>
			        </div>
			    </header>
			    <p>{text}</p>
			</li>
		);
	}
}

Item.defaultProps = {
	author: 'noname',
	text: 'lorem ipsum'
};

export default Item;