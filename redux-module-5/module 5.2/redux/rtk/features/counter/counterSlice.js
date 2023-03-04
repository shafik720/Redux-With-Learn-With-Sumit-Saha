const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    count : 0
}


const counterReducer = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state, action) => {
            state.count++
        },
        decrement : (state, action) => {
            state.count--
        }
    }
})

module.exports = counterReducer.reducer;
module.exports.actionCreators = counterReducer.actions;