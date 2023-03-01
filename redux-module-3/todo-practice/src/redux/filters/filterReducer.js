
import { COLORSELECTOR, STATUS } from "./actionIdentifiers";
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
    
        case COLORSELECTOR : 
            const {color, status} = action.payload;
                switch (status) {
                    case 'added':
                        return {
                            ...state, 
                            colors : [
                                ...state.colors,
                                color
                            ]
                        }

                    case 'removed' : 
                        return {
                            ...state,
                            colors : state.colors.filter(index => index !== color)
                        }
                    default:
                        return state
                };
        
        default:
            return state;
    }
}