import { initialState } from "./initialState";
import { ADDED, ALLCOMPLETE, CLEARCOMPLETE, COLORSELECTED, DELETED, TOGGOLED } from './actionIdentifiers'

const nextId = (todo) => {
    const maxId = todo.reduce((maxID, index) => Math.max(index.id, maxID), -1);
    return maxId + 1;
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextId(state)
                }
            ]

        case ALLCOMPLETE:
            return state.map(todo => ({...todo, completed : true}));

        case CLEARCOMPLETE :
                return state.filter(todo => !todo.completed)

        case COLORSELECTED: 
                return state.map(todo => {
                    if(todo.id == action.payload.elementId){
                        return {...todo, color : action.payload.colors}
                    }
                    return todo;
                })

        case DELETED  : 
                return state.filter(todo => todo.id !== action.payload);

        case TOGGOLED : 
        // console.log(state.map(todo=>todo.completed))
                return state.map(todo => {
                    if(todo.id == action.payload){
                        // console.log(todo.completed)
                        return{
                            ...todo, 
                            completed : !todo.completed
                        }
                    }
                    return todo;
                })
        default:
            return state;
    }
}