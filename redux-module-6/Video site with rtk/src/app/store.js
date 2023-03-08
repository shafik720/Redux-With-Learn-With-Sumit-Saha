import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videoReducer from '../features/videos/videos'

export const store = configureStore({
  reducer: {
    counter: videoReducer,
  },
});
