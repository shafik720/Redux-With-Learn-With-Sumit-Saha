const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")
const fetch = require('node-fetch')

const initialState = {
    loading : false,
    error : '',
    posts : []
}

const fetchPost = createAsyncThunk('post/fetchPost', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();
    return posts; 
})

const postSlice = createSlice({
    name : 'post' , 
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchPost.pending, (state, action)=>{
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchPost.fulfilled, (state, action)=>{
            state.loading = false ;
            state.error = '';
            state.posts= action.payload;
        })
        builder.addCase(fetchPost.rejected, (state, action)=>{
            state.loading = false ;
            state.error = action.error.message;
            state.posts= [];
        })
    }  
})

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;