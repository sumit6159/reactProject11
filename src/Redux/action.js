const ADD_TODO = 'ADD_TODO';
const CHANGE_STATUS = 'CHANGE_STATUS';
const add_Status = (payload) => ({type: CHANGE_STATUS,  payload});
const addTodo = (todo) => ({type : ADD_TODO, payload : todo});

const DELETE_TODO  = 'DELETE_TODO';
const deleteTodo = (todo) =>({type : DELETE_TODO, payload : todo});
export {ADD_TODO, addTodo, CHANGE_STATUS, add_Status , DELETE_TODO, deleteTodo}