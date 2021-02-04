import React,{useState } from 'react';
import {useCouter} from '../../hooks/useCouter';
export const MemoHook = () => {
    const {counter,increment}=useCouter(1000);
    const [show, setshow] = useState(true);

    const procesoPesado =(iteraciones)=>{
        for(let i=0; i<iteraciones; i++){
            console.log('Ahi Vamos');
        }

        return `${iteraciones} iteraciones realizadas`;
    }
    // const memoProcesoPesado =useMemo(() => procesoPesado(counter), [counter]);


	return (
		<div>
			<h1>counter <small>{counter}</small>  </h1>
            <hr />
            <p>{procesoPesado(counter)}</p>

            <button onClick={()=> increment()}> +1</button>
            <button onClick={()=>setshow(!show)}>Show /Hide</button>
		</div>
	);
};