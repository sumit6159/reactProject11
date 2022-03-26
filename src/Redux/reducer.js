import { ADD_TODO, CHANGE_STATUS,DELETE_TODO } from "./action";

export const reducer = (store, {type , payload}) =>{

    switch(type){
        case ADD_TODO:
            return {...store, todo : [...store.todo, payload]};
        case CHANGE_STATUS : {
            const index = store.todo.findIndex(todo => todo.id === payload); //finding index of the item
            const newArray = [...store.todo]; //making a new array
            const stateare = newArray[index].status;
            newArray[index].status =  !stateare; //changing value in the new array
            
                return { 
                     ...store, //copying the orignal state
                    todo: newArray, //reassingning todos to new array
                }
            };
        case DELETE_TODO: 
        const filteredTodos = store.todo.filter(todo => todo.id !== payload)
            return { 
                ...store, 
                todo: filteredTodos
            }
        default:
            return store
    }
}