import { initialState } from "./initialState";
import {ADDTASK} from './actionIdentifiers';

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
    
        default:
            return state;
    }
}