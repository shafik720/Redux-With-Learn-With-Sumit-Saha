import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transactions/transactions'

export const store = configureStore({
  reducer: {
    transaction : transactionReducer
  },
});
