import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:9000/',
        prepareHeaders : async (headers,{getState, endpoints})=>{
            const token = getState()?.auth?.userAccessToken;
            if(token){
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers
        }
    }),
    tagTypes : [],
    endpoints : (builder) => ({}),
})


export default apiSlice ; 