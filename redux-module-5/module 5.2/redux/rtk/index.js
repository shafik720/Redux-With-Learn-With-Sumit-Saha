const store = require("./features/app/store");
const { actionCreators } = require("./features/counter/counterSlice");




console.log('Initial State : ', store.getState());

store.subscribe(()=>{
    console.log('Update State : ', store.getState());
})

store.dispatch(actionCreators.increment());
store.dispatch(actionCreators.increment());
store.dispatch(actionCreators.decrement());

