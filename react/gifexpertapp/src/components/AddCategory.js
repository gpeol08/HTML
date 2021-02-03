import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias(value => [inputValue,...value]);
            setInputValue('');
        }
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={handleChange} value={inputValue} />
		</form>
	);
};


AddCategory.propTypes={
    setCategorias:PropTypes.func.isRequired
}