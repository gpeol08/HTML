import React, { useEffect, useState } from 'react';

export const Message = () => {
const [coors,setcoors]=useState({x:0,y:0})
    useEffect(()=>{

        const mouseMove = (e) =>{
            setcoors({x:e.x,y:e.y});
        }
        window.addEventListener('mousemove',mouseMove);
        return()=>{
            window.removeEventListener('mousemove',mouseMove);
        }
    })
    
	return <h1>x:{coors.x} y:{coors.y}</h1>;
};
