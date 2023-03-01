import { initialState } from "../todos/initialState";
import { STATUS } from "./actionIdentifiers";


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
                return state;
            }
    
        default:
            return state;
    }
}