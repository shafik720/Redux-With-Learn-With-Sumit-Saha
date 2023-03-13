import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransactionData } from "./transactionsApi"


const initialState = {
    transactions: [],
    isError: false,
    isLoading: false,
    error: ''
}


export const fetchTransactions = createAsyncThunk('transaction/fetchData', async () => {
    const data = await getTransactionData();
    return data;
})

export const changeTransactions = createAsyncThunk('transaction/editData', async ({ id, data }) => {
    const transaction = await editTransaction({ id, data });
    return transaction;
})

export const newTransaction = createAsyncThunk('transaction/addData', async ({ data }) => {
    const transaction = await addTransaction({ data });
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/deleteData', async ({ id }) => {
    const transaction = await deleteTransaction({ id });
    return transaction;
})


const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: (builder) => {
        builder
        // ------------------- for fetchTransaction
            .addCase(fetchTransactions.pending, (state) => {
                state.transactions = [];
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.transactions = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.transactions = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

            // ---------------- for adding new transaction
            .addCase(newTransaction.pending, (state) => {
                state.transactions = [];
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(newTransaction.fulfilled, (state, action) => {
                state.transactions.push(action.payload);
                state.isLoading = false;
                state.isError = false;
                state.error = '';
            })
            .addCase(newTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            // --------------------------- for editing transaction
            // --------------------------- for deleting transaction
    }
})