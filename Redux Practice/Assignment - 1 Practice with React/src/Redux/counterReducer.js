import { ADD_MATCH, DELETE_MATCH, INCREMENT } from "./actionIdentifiers";


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
    
        case DELETE_MATCH : 
        // console.log(state.matches.filter(match=>match.id !== action.payload));
            return{
                ...state,
                matches : state.matches.filter(match=>match.id !== action.payload)
            }

        default:
            return state;
    }
}