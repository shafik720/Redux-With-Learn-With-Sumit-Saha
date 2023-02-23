import { DECREMENT, INCREMENT } from "./actionTypes"


export const increment  = () =>{
    return {
        type : INCREMENT,
        payload : 5
    }
}

export const decrement = () => {
    return {
        type : DECREMENT,
        payload: 5
    }
}