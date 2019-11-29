import React from 'react';

import Edit from './icons/edit.svg';
import Delete from './icons/delete.svg';

class Icon extends React.Component {
	render() {
		const { name } = this.props;
		switch (name) {
			case 'edit': 
				return <Edit />;
			case 'delete':
				return <Delete />;
			default:
				return <span>🔔</span>;
		}
	}
}

export default Icon;
