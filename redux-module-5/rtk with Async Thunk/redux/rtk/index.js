const store = require("./app/store");
const { actionCreators } = require("./features/counter");



console.log('Initial State : ', store.getState() );

store.subscribe(()=>{
    console.log('Updated State: ', store.getState());
})


store.dispatch(actionCreators.increment())
store.dispatch(actionCreators.increment())
store.dispatch(actionCreators.decrement())