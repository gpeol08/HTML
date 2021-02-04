import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
	console.log('uuu');
	return <button onClick={()=>increment(5)}>Incrementar</button>;
});
