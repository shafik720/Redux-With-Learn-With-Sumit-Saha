

// selecting dom element 
const counterElement = document.getElementById('counter');
const increaseElement = document.getElementById('increment');
const decreaseElement = document.getElementById('decrement');

// creating initail state
const initialState = {
    value : 0 
}

// creating reducer
const dummyReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            ...state , 
            value : state.value + action.payload
        }
    }else if(action.type === 'decrement'){
        return {
            ...state, 
            value : state.value - action.payload
        }
    }else{
        return state;
    }
}


// creating a store
const store = Redux.createStore(dummyReducer);

// subscribing
const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value;
}
store.subscribe(render);
render();


// action identifiers
const INCREMENT = 'increment';
const DECREMENT =  'decrement';
// action creators
const increaseAction = (value) =>{
    return{
        type : INCREMENT,
        payload : value
    }
}
const decreaseAction = (value) =>{
    return {
        type : DECREMENT,
        payload : value
    }
}

// getting event listener
increaseElement.addEventListener('click',()=>{
    store.dispatch(increaseAction(25))
})

decreaseElement.addEventListener('click', ()=>{
    const state = store.getState().value;
    if(state > 0){
        store.dispatch(decreaseAction(5)) ; 
    }
})
