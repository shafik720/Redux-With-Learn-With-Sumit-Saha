import { initialState } from "./initialState";
import {ADDTASK, CLEARCOMPLETED, COLORSELECT, COMPLETEALLTASK, DELETETASK, TOGGLE} from './actionIdentifiers';

const newId = (todo) => {
    const maxId = todo.reduce((maxID, index)=> Math.max(index.id, maxID), -1);
    return maxId + 1;
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return [
                ...state,
                {
                    id : newId(state),
                    completed : false,
                    text : action.payload
                }
            ]
    
        case COMPLETEALLTASK : 
            return state.map(todo=>({...todo, completed: true}));

        case CLEARCOMPLETED : 
            return state.filter(todo => !todo.completed);

        case TOGGLE:
            return state.map(todo => {
                if(todo.id === action.payload){
                    return ({
                        ...todo, 
                        completed : !todo.completed
                    })
                }else{
                    return todo;
                }
            })
        
        case COLORSELECT : 
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        color : action.payload.color 
                    }
                }else{
                    return todo;
                }
            })

        case DELETETASK :
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }
}