const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")
const fetch = require('node-fetch');


const initialSTate = {
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
    name : 'post',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchPost.pending, (state, action)=>{
            state.loading = true;
        })

        builder.addCase(fetchPost.fulfilled, (state, action)=>{
            state.loading = false;
            state.posts = action.payload
        })

        builder.addCase(fetchPost.error, (state, action)=>{
            state.loading = false;
            state.posts = [];
            state.error = '';
        })
    }
})


module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;