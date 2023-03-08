const store = require("./features/app/store");
const { counterActions } = require("./features/counter/counterSlice");

console.log('Initial State : ', store.getState());

store.subscribe(()=>{
    console.log("Updated State : ", store.getState() );
})

store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());