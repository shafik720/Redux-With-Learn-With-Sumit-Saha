const { createStore } = require("redux");

const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/added':
            return{
                ...state,
                todos : [
                    ...state.todos,
                    {
                        title : action.payload
                    }
                ]
            }
        case 'todos/loaded' : 
            return{
                ...state,
                todos : [
                    ...state.todos, ...action.payload
                ]
            }
    
        default:
            return state ;
    }
}

const store = createStore(todoReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type : 'todos/added',
    payload : 'Todo Number One'
});

