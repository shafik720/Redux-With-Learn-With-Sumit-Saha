console.log('testing')
// dom element 
const counter = document.getElementById('counter');
const incrementElement = document.getElementById('increment');
const decrementElement = document.getElementById('decrement');


// initial state
const initialState = {
    value : 0 ,
};


// reducer function
function counterReducer(state=initialState, action){
    if(action.type === 'increment'){
        return {
            ...state, 
            value: state.value+1
        } 
    }else if(action.type === "decrement"){
        return{
            ...state,
            value : state.value - 1
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

// button clicking event
incrementElement.addEventListener('click', ()=>{
    store.dispatch({
        type : 'increment'
    });
})
decrementElement.addEventListener('click', ()=>{
    store.dispatch({
        type : 'decrement'
    });
})