import { ADD_MATCH, INCREMENT } from "./actionIdentifiers";


const initialState = {
    matches : [
        {
            id : 1,
            incrementValue : 0,
            decrementValue : 0, 
            score : 0
        }
    ]
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCH:
            const newId = state.matches.length + 1 ;
            return{
                ...state,
                matches : [
                    ...state.matches,
                    {
                        id : newId,
                        incrementValue : 0,
                        decrementValue : 0, 
                        score : 0
                    }
                ]
            }
    
        default:
            return state;
    }
}