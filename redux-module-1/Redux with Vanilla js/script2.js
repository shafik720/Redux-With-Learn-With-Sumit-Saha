

// selecting dom element
const counterElement = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');


// first state or initial state
const initialState = {
    value : 0,
}


// creating a reducer
const countReducer = (state = initialState, action) =>{
    if(action.type === 'increment'){
        return updateState = {
            ...state,
            value : state.value + 1
        }
    }else if(action.type === 'decrement'){
        return updateState = {
            ...state, 
            value : state.value - 1 
        }
    }else{
        return state;
    }
}

// creating store
const store = Redux.createStore(countReducer);

const render = () =>{
    const state = store.getState();
    counterElement.innerText = state.value;
}

store.subscribe(render);
// 
incrementElement.addEventListener('click',()=>{
    store.dispatch( {
        type : 'increment'
    } )
})