const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require('../counter/counterSlice');
const postReducer = require('../posts/posts')

const store = configureStore({
    reducer : {
        counter : counterReducer,
        post : postReducer
    }
})


module.exports = store