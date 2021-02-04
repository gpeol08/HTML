import React, { useRef } from 'react';

export const FocusScreen =()=>{

    const inputref = useRef();

    const handleClick =()=>{
       inputref.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={inputref}
                placeholder="Nombre"
                />
            <button
            onClick={handleClick}>Focus</button>
        </>
    )
}