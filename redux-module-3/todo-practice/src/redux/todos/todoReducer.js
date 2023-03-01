import { initialState } from "./initialState";
import {ADDTASK, CLEARCOMPLETED, COMPLETEALLTASK} from './actionIdentifiers';

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
        default:
            return state;
    }
}