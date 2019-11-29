import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 

import Form from '../Form';
import Icon from '../Icon';
import Button from '../Button';

import { removeComment } from '../../actions';
import styles from './style.css';

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

	render() {;
		const { item, removeComment } = this.props;
		const { isShowForm } = this.state;

		return (
			<li className={styles.item}>
				{
					isShowForm ? (
						<Form
						  type="edit"
						  item={item}
						/>
					) : (
						<>
							<header className={styles.head}>
						        <h3 className={styles.title}>{item.author}</h3>
					        	<div className={styles.action}>
					        		<Button
						        	  theme="small"
						        	  handleClick={this.handleChange}
						        	>
										<Icon name="edit" />
						        	</Button>
						        	<Button
						        	  theme="small"
						        	  handleClick={() => removeComment(item.id)}
						        	>
										<Icon name="delete" />
						        	</Button>
						        </div>
						    </header>
						    <p>{item.text}</p>
						</>
					)
				}
			</li>
		);	
	}
}

// const mapDispatchToProps = (dispatch) => ({
// 	removeComment: (id) => dispatch(removeComment(id))
// });

export default connect(null, { removeComment })(Item);