import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAccessToken : undefined,
    user : undefined
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : ({
        userLoggedIn :(state, action) => {
            state.userAccessToken = action.payload.userAccessToken;
            state.user = action.payload.user;
        },
        userLoggedOut : (state, action) => {
            state.userAccessToken  = undefined ; 
            state.user = undefined;
        }
    })
})

export default authSlice.reducer;
export const {userLoggedIn , userLoggedOut} = authSlice.actions ; 