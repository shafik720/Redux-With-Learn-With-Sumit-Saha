import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSlice from '../features/auth/auhSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth : authSlice,
  },
  middleware : (getDefaultMiddlewares) => 
  getDefaultMiddlewares().concat((apiSlice.middleware))
});
