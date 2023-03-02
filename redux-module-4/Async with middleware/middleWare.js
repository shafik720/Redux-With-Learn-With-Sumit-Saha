const { default: fetch } = require("node-fetch");



const delayMiddleWare = (store)=>(next)=>(action)=> {
    if(action.type == 'todos/added'){
        console.log('delaying here');
        setTimeout(() => {
            return next(action);
        }, 3000);
        return ; 
    }
    return next(action);
}

const fetchingMiddleWare = (store) => (next) => async(action) => {
    if(typeof action == 'function'){
        return action(store.dispatch, store.getState)
    }
    return next(action);
}


module.exports = {
    delayMiddleWare,
    fetchingMiddleWare
}