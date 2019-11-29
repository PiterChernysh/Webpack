import React from 'react';

const Test = (props) => {
	if(__DEV__) {
		console.log(process.env.API_KEY);
		console.log(props);
	}
	return (
		<p>test</p>
	)
}

export default Test;