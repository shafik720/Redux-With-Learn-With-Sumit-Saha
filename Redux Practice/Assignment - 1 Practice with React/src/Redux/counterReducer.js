import { ADD_MATCH, DECREMENT, DELETE_MATCH, INCREMENT, RESET_MATCH } from "./actionIdentifiers";


const initialState = {
    matches: [
        {
            id: 1,
            incrementValue: 0,
            decrementValue: 0,
            score: 0
        }
    ]
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCH:
            const newId = state.matches.length + 1;
            return {
                ...state,
                matches: [
                    ...state.matches,
                    {
                        id: newId,
                        incrementValue: 0,
                        decrementValue: 0,
                        score: 0
                    }
                ]
            }

        case DELETE_MATCH:
            // console.log(state.matches.filter(match=>match.id !== action.payload));
            return {
                ...state,
                matches: state.matches.filter(match => match.id !== action.payload)
            }

        case RESET_MATCH:
            return {
                ...state,
                matches: state.matches.map(match => ({ ...match, score: 0 }))
            }

        case INCREMENT:
            return {
                ...state,
                matches: state.matches.map(match =>
                    match.id == action.payload.id ? { ...match, score: match.score + parseInt(action.payload.value) } : match
                )
            }

        case DECREMENT :
            const match = state.matches.find(match=>match.id === action.payload.id);
            const decrementLimit = match.score;
            const decrementValue = action.payload.value > decrementLimit ? decrementLimit : action.payload.value ;
            console.log(decrementValue)
            return{
                ...state,
                matches : state.matches.map(match => match.id === action.payload.id ? {...match, score : match.score - decrementValue} : match)
            }

        default:
            return state;
    }
}