


const initialState = {
    value: 0
}

// creating reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + action.payload,
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state;
    }
}
// selecting dom element
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decreaseElement = document.getElementById('decrement');

// creating store
const store = Redux.createStore(counterReducer);

// subscribing
const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}
store.subscribe(render);

render();

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increaseValue = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decreaseValue = (value) => {
    return {
        type : DECREMENT,
        payload : value
    }
}

// adding event listener
incrementElement.addEventListener('click', () => {
    store.dispatch(increaseValue(5))
})

decreaseElement.addEventListener('click',()=>{
    const state = store.getState().value;
    if(state > 0){
        store.dispatch(decreaseValue(5))
    }else {
        return;
    }
    
})