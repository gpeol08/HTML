import React, {  useState } from 'react';
import {MultipleHooks} from '../03-Ejemplos/MultipleHooks';
export const ExampleRef = () => {
    
    const [show,setShow] = useState(false);

    
	return (
		<>
			<h1> Focus Screen </h1> <hr />
		{show && <MultipleHooks />}
        <button onClick={() =>setShow(!show)}>
            Show /Hide
        </button>
		</>
	);
};
