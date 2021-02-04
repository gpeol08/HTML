import React, { useReducer, useEffect, useState } from "react";
import { todoReducer } from "./TodoReducer";
import "./style.css";

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: "Aprender React",
    //     done: false,
    // }]

    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [state, setState] = useState('');
    const handleChange = ({ target }) => {
        setState(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.trim().length <= 1)
            return;

        const newTodo = {
            id: new Date().getTime(),
            desc: state,
            done: false,
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
        setState('');
    }

    const handleDelete =(id) =>{
        const accion={
            type:'del',
            payload:id
        }
        dispatch(accion);
    }
    const handleToggle =(id)=>{
        dispatch({
            type:'put',
            payload:id
        })
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    return (
        <div>
            <h1>Todo App {todos.length}</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul>
                        {todos.map((todo, i) => (
                            <li key={todo.id} className="list-group-item">
                                <p className={`text-center ${todo.done && 'completo'} `}
                                onClick={()=>handleToggle(todo.id)}>
                                    {i + 1}. {todo.desc}
                                </p>
                                <button
                                    onClick={()=> handleDelete(todo.id)} 
                                    className="btn btn-danger">Borrar</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Tarea"
                            autoComplete="off"
                            value={state}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
