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
    if(action.type === 'todo/fakeAction'){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todo = await response.json();

        store.dispatch({
            type : 'todos/loaded',
            payload : todo
        })
        console.log(`Number of updated todos: ${store.getState().todos.length}`);

        return;
    }
    return next(action);
}


module.exports = {
    delayMiddleWare,
    fetchingMiddleWare
}