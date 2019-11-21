import React from 'react';

const User = (props) => (
	<div>
		<h1>{props.user.name}</h1>
		<p>I'm {props.user.age} years old</p>
	</div>
);

const withProps = (Comp) => {
	const user = {
		name: 'Ololo',
		age: 56,
	};

	return (
		props => (
			<Comp
			  user={user}
			  {...props}
			/>
		)
	);
}

export default withProps(User);