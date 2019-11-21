import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 

import Form from '../Form';
import Icon from '../Icon';

class Item extends PureComponent {
	constructor(props) {
		super();

		this.state = {
			isShowForm: false,
			item: props.item,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		const { author, text } = state.item;
		if ((props.item.author !== author) || (props.item.text !== text)) {
			return {
				isShowForm: false,
			}
		}
		return null;
	}

	// componentWillReceiveProps(nextProps) {
	// 	const { author, text } = this.props.item;
	// 	if ((nextProps.item.author !== author) || (nextProps.item.text !== text)) {
	// 		this.handleChange();
	// 	}
	// }

	handleChange() {
		const { isShowForm } = this.state;
		this.setState({
			isShowForm: !isShowForm,
		});
	}

	render() {
		const { item, removeFromList, updateFromList } = this.props;
		const { isShowForm } = this.state;

		return (
			<li className="item">
				{
					isShowForm ? (
						<Form
						  type="edit"
						  item={item}
						  addFromProps={updateFromList}
						/>
					) : (
						<>
							<header className="item__head">
						        <h3 className="item__title">{item.author}</h3>
						        <div className="item__action">
						            <button
						              className="button button--small"
						              onClick={this.handleChange}
						            >
						            	<Icon name="edit" />
						            </button>
						            <button
						              className="button button--small"
						              onClick={() => removeFromList(item.id)}
						            >
						            	<Icon name="delete" />
						            </button>
						        </div>
						    </header>
						    <p style={{ color: this.context.color }}>{item.text}</p>
						</>
					)
				}
			</li>
		);	
	}
}

Item.defaultProps = {
	author: 'noname',
	text: 'lorem ipsum'
};

Item.contextTypes = {
	color: PropTypes.string,
};

export default Item;