import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./auhSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    localStorage.setItem('auth', JSON.stringify({
                        userAccessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                    dispatch(userLoggedIn({
                        userAccessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem('auth', JSON.stringify({
                        userAccessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                    dispatch(userLoggedIn({
                        userAccessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                } catch (err) {
                    console.log(err);
                }
            }
        })
    })
})

// export default authApi;
export const { useRegisterMutation, useLoginMutation } = authApi;