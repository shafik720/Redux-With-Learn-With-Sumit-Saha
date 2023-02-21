

// creating initial state
const initialState = {
    value : 0
}


// creating reducer
const counterReducer = (state = initialState , action) => {
    if(action.type === 'increment'){
        return {
            ...state,
            value : state.value + action.payload
        }
    }else if(action.type === 'decrement'){
        return{
            ...state,
            value : state.value - action.payload
        }
    }else{
        return(state);
    }
}

// selecting dom element
const counterElement = document.getElementById('counter');
const increaseElement = document.getElementById('increment');
const decreaseElement = document.getElementById('decrement');

//creating store
const store = Redux.createStore(counterReducer);

const render = () =>{
    const state = store.getState();
    counterElement.innerText = state.value; 
}
store.subscribe(render);
render();

// action identifiers
const INCREMENT = 'increment';
const DECREMENT =  'decrement'

// action creators
const increasingValue = (value) =>{
    return{
        type : INCREMENT,
        payload : value,
    }
}

const decreasingValue = (value) =>{
    return {
        type : DECREMENT,
        payload : value
    }
}

// creating event listener
increaseElement.addEventListener('click',()=>{
    store.dispatch(increasingValue(5))
})

decreaseElement.addEventListener('click',()=>{
    //  if the value is 0 
    if(store.getState().value <= 0){
        return;
    }
    store.dispatch(decreasingValue(5))
})