import React, { useState, useEffect } from 'react';

import Form from '../Form';
import Icon from '../Icon';
import Button from '../Button';

import styles from './style.scss';

const Item = ({
	item = {
		author: 'noname',
		text: 'lorem ipsum'
	},
	removeFromList,
	updateFromList,
}) => {
	const [isShowForm, handleShowForm] = useState(false);

	useEffect(() => {
		console.log('или маунт компоненты или кто-то нажал редактировать');
	}, [isShowForm]);

	useEffect(() => {
		handleShowForm(false);
	}, [item]);

	return (
		<li className={styles.item}>
			{
				isShowForm ? (
					<Form
					  type="edit"
					  item={item}
					  addFromProps={updateFromList}
					/>
				) : (
					<>
						<header className={styles.head}>
					        <h3 className={styles.title}>{item.author}</h3>
					        <div className={styles.action}>
					        	<Button
					        	  theme="small"
					        	  handleClick={() => handleShowForm(!isShowForm)}
					        	>
									<Icon name="edit" />
					        	</Button>
					        	<Button
					        	  theme="small"
					        	  handleClick={() => removeFromList(item.id)}
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

export default Item;