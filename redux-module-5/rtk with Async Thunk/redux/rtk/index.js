const store = require("./app/store");
const { actionCreators } = require("./features/counter");
const { fetchPost } = require("./features/postWithThunk/posts");



console.log('Initial State : ', store.getState() );

store.subscribe(()=>{
    console.log('Updated State: ', store.getState());
})


// store.dispatch(actionCreators.increment())
// store.dispatch(actionCreators.increment())
// store.dispatch(actionCreators.decrement())

store.dispatch(fetchPost())