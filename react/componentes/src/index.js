import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css';


const divroot = document.querySelector("#root");


ReactDOM.render(<CounterApp value={10}/>,divroot);
// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku"/>,divroot);
