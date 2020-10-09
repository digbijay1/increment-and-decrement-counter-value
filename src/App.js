import React, { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	const IncNum = () => {
		setCount(count + 1);
	};
	const Dec = () => {
		setCount(count - 1);
	};
	return (
		<>
			<h1> {count} </h1>
			<button onClick={IncNum}> + Click To Increment</button>
			<button onClick={Dec}> - Click To Decrement</button>
		</>
	);
};
export default App;
