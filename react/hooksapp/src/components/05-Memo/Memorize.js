import React,{useState } from 'react';
import {useCouter} from '../../hooks/useCouter';
import { Small } from './Small';
export const Memorize = () => {
    const {counter,increment}=useCouter(10);

    const [show, setshow] = useState(true);
	return (
		<div>
			<h1>counter <Small value={counter} /> </h1>
            <hr />
            <button onClick={()=> increment()}> +1</button>
            <button onClick={()=>setshow(!show)}>Show /Hide</button>
		</div>
	);
};
