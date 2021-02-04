import React from 'react';
import { useCouter } from '../../hooks/useCouter';
import './Counter.css';



export const CounterCustomHook =() =>{

    const {state,increment,decrement,reset} = useCouter(123);

    return(
        <>
        <h1>Counter Hook: {state}</h1>


        <button onClick={(e) => increment(2)} className="plus">+1</button>
        <button onClick={reset} className="reset">reset</button>
        <button onClick={(e) => decrement(2)} className="desc">-1</button>
        </>
    )
}