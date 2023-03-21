import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import messagesliceReducer from '../features/messages/messagesSlice';
import conversationSliceReducer from '../features/conversations/conversationSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth : authSliceReducer,
    messages : messagesliceReducer,
    conversation : conversationSliceReducer
  },
  devTools : process.env.NODE_ENV !== 'production',
  middleware : (getDefaultMiddleware) => getDefaultMiddleware.concat(apiSlice.middleware),
});
