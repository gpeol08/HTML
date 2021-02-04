const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const reducer = (state = initialState, action) => {
    if (action?.type === 'ADD') {
        return [...state, action.payload];
    }
    return state;
}

const newtodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}
const action = {
    type: 'ADD',
    payload: newtodo
}
let todo = reducer();
todo = reducer(todo, action);

console.log(todo);