import { initialState } from "./initialState";
import {ADDTASK, COMPLETEALLTASK} from './actionIdentifiers';

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
        // console.log(state.map(todo=>todo.completed))
            return state.map(todo=>({...todo, completed: true}))
        default:
            return state;
    }
}