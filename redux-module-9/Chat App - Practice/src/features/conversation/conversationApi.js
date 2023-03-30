import { createApi } from "@reduxjs/toolkit/query/react";
import apiSlice from "../api/apiSlice";

const conversationApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getConverSation : builder.query({
            query : (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
        })
    })
})

export default conversationApi ; 
export const {useGetConverSationQuery} = conversationApi;