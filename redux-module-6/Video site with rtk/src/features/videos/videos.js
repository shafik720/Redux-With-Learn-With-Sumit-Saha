const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { videoApi } = require("./videosApi");

const initialState = {
    videos : [],
    isLoading : false,
    isError : false,
    error : ''
}

const fetchVideo = createAsyncThunk('videos/fetchVideos', async()=>{
    const videos = await videoApi();
    return videos;
})


const videoSlice  = createSlice({
    name : 'videos',
    initialState,
    extraReducers : (builder)=>{
        builder
        .addCase(fetchVideo.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
            state.videos = [];
        })
        .addCase(fetchVideo.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.videos = action.payload;
        })
        .addCase(fetchVideo.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.videos = action.payload;
        })
    }
})


export default videoSlice.reducer;