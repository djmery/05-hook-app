
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,

}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[todo], add todo') {
        return [...state, action.payload]
    }


    return state;

}

let todos = todoReducer();
//Cuando queeremos hacer alguna modificación a mi reducer lo que vamos hacer es mandarle una acción
//y esa acción le dice como va a modificarse

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[todo], add todo',
    payload: newTodo,

}

todos = todoReducer(todos, addTodoAction);

console.log(todos);



