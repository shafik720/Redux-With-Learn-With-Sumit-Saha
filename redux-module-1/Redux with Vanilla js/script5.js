
// selecting dom element
const counterElement = document.getElementById('counter');
const increaseElement = document.getElementById('increment');
const decreaseElement = document.getElementById('decrement');

// creating first state
const firstState = {
    value : 0
}

// creating a reducer
const dummyReducer = (state = firstState, action) => {
    if(action.type === 'increment'){
        return {
            ...state,
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


// creating subscriber
const store = Redux.createStore(dummyReducer);



const render = () =>{
    const currentStateValue = store.getState().value;
    counter.innerText = currentStateValue;
}
store.subscribe(render);

render();

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increaseAction = (value) => {
    return{
        type : INCREMENT,
        payload : value
    }
}

const decreaseAction = (value) => {
    return {
        type : DECREMENT,
        payload : value
    }
}

// adding eventlistener
increaseElement.addEventListener('click',()=>{
    store.dispatch( increaseAction(10))
})

decreaseElement.addEventListener('click',()=>{
    const currentStateValue = store.getState().value;
    if(currentStateValue>0){
        store.dispatch( decreaseAction(10));
    }
    
})