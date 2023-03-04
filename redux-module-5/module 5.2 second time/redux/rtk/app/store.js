const { configureStore } = require("@reduxjs/toolkit");
const counterSlice = require("../features/counter")


const store = configureStore({
    reducer : {
        counter : counterSlice
    }
})

module.exports = store;