const { createStore, applyMiddleware } = require("redux");
const { delayMiddleWare } = require("./middleWare2");


const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todo/added':
            return{
                ...state,
                todos : [
                    ...state.todos, 
                    {
                        title : action.payload
                    }
                ]
            }
    
        case 'todo/loadedData':
            return{
                ...state,
                todos : [
                    ...state.todos,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}

const store = createStore(todoReducer, applyMiddleware(delayMiddleWare));

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type: 'todo/added',
    payload : 'Todo number two'
})