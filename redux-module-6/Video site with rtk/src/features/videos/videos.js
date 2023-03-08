const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    videos : [],
    isLoading : false,
    isError : false,
    error : ''
}

const fetchVideo = createAsyncThunk('videos/fetchVideos',)


const videoSlice  = createSlice({
    name : 'videos',
    initialState,
})