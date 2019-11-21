import React, { useState } from 'react';

const Test = () => {
	const [count, changeCount] = useState(0);

	const changeNum = (num) => {
		changeCount(count+num);
	}

	return (
		<div
		  style={{
		  	margin: '100px',
		  	display: 'flex',
		  	justifyContent: 'center'
		  }}
		>
			<button onClick={() => changeNum(-1)}>-1</button>
			{count}
			<button onClick={() => changeNum(1)}>+1</button>
		</div>
	)
}

export default Test;