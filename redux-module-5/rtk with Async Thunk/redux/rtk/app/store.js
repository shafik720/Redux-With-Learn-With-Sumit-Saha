const { configureStore } = require("@reduxjs/toolkit");
const counterSlice = require("../features/counter")
const postSlice = require('../features/postWithThunk/posts')

const store = configureStore({
    reducer : {
        counter : counterSlice,
        post : postSlice
    }
})

module.exports = store;