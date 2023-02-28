import { COLORSELECTED, STATUSCHANGED } from "./actionIdentify";
import { initialState } from "./initialState";


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status : action.payload
            }
    
        case COLORSELECTED :
            const {color, changeTypes} = action.payload; 
                switch (changeTypes) {
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
                            colors : state.colors.filter(existingColor => existingColor !== color),
                        }
                    default:
                        return state;
                };
        default:
            return state;
}
}