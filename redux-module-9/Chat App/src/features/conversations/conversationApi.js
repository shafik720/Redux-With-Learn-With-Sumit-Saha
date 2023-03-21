import apiSlice from "../api/apiSlice";



export const conversationApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getConverSations : builder.query({
            query : (email) => 
            `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
        }) 
    })
})


export const {useGetConverSationsQuery} = conversationApi ;