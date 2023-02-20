console.log('testing')
// dom element 
const counter = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');


// initial state
const initialState = {
    value : 0 ,
};

//action creator
const INCREMENT =   'increment';
const DECREMENT =   'decrement';

// action creators
const increment = (value) =>{
    return {
        type : INCREMENT,
        payload : value,
    }
}
const decrement = (value) =>{
    return {
        type : DECREMENT,
        payload : value,
    }
}

// reducer function
function counterReducer(state=initialState, action){
    if(action.type === 'increment'){
        return {
            ...state, 
            value: state.value + action.payload
        } 
    }else if(action.type === "decrement"){
        return{
            ...state,
            value : state.value - action.payload ,
        }
    }else{
        return state ;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counter.innerText = state.value;
}
store.subscribe(render);

render();

// button clicking event
incrementElement.addEventListener('click', ()=>{
    store.dispatch(increment(10));
})
decrementElement.addEventListener('click', ()=>{
    store.dispatch(decrement(3));
})