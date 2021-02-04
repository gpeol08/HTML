import React from 'react';

export const Small = React.memo(({ value }) => {
console.log('Memo')
	return <small>{value}</small>;
})
