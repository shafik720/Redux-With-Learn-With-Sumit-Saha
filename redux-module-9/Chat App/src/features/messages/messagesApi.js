import apiSlice from "../api/apiSlice";


export const messagesApi = apiSlice.injectEndpoints ({
    endpoints : (builder) => ({
        getSingleMessages : builder.query({
            query : (id) => `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
        })
    })
})

export const {useGetSingleMessagesQuery} = messagesApi ; 