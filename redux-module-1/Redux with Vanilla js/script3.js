

// creating initial state
const initialState = {
    value : 0
}


// creating reducer
const counterReducer = (state = initialState , action) => {
    if(action.type === 'increment'){
        return {
            ...state,
            value : state.value + 1
        }
    }else if(action.type === 'decrement'){
        return{
            ...state,
            value : state.value - 1
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

// creating event listener
increaseElement.addEventListener('click',()=>{
    store.dispatch({
        type : 'increment'
    })
})

decreaseElement.addEventListener('click',()=>{
    store.dispatch({
        type : 'decrement'
    })
})