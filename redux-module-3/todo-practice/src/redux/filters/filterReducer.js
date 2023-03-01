
import { STATUS } from "./actionIdentifiers";
import { initialState } from "./initialState";


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS:
            if(action.payload === 'complete'){
                return {
                    ...state,
                    status : 'completed'
                }
            }else if(action.payload === 'incomplete'){
                return{
                    ...state,
                    status : 'incomplete'
                }
            }else{
                return { ...state, status : 'all'}
            }
    
        default:
            return state;
    }
}