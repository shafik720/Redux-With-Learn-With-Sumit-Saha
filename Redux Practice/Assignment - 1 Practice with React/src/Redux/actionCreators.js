import { ADD_MATCH, DECREMENT, DELETE_MATCH, INCREMENT, RESET_MATCH } 
from "./actionIdentifiers";


const incrementValue = (value,id) =>{
    return{
        type : INCREMENT,
        payload : {value,id}
    }
}

const decrementValue = (value, id) => {
    return {
        type : DECREMENT,
        payload : {value,id}
    }
}

const addMatch = (value) => {
    return{
        type : ADD_MATCH,
        payload : value
    }
}

const deleteMatch = (value) => {
    return{
        type : DELETE_MATCH,
        payload : value
    }
}

const resetMatch = () => {
    return{
        type : RESET_MATCH,
    }
}


export{
    incrementValue,
    decrementValue,
    addMatch,
    deleteMatch,
    resetMatch
}