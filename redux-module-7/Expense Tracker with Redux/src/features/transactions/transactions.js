import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransactionData } from "./transactionsApi"


const initialState = {
    transactions: [],
    isError: false,
    isLoading: false,
    error: '',
    editing: {}
}


export const fetchTransactions = createAsyncThunk('transaction/fetchData', async () => {
    const data = await getTransactionData();
    return data;
})

export const newTransaction = createAsyncThunk('transaction/addData', async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
})
export const changeTransactions = createAsyncThunk('transaction/editData', async ({ id, data }) => {
    const transaction = await editTransaction({ id, data });
    return transaction;
})


export const removeTransaction = createAsyncThunk('transaction/deleteData', async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})


const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        activeEdit: (state, action) => {
            state.editing = action.payload;
        },
        deActiveEdit : (state, action) => {
            state.editing = {};
        }
    },
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
            .addCase(changeTransactions.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(changeTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                const indexToUpdate = state.transactions.findIndex((t) => t.id === action.payload.id);
                // console.log(action.payload);
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(changeTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            // --------------------------- for deleting transaction
            .addCase(removeTransaction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isError = false;
                state.transactions = state.transactions.filter(index => index.id !== action.meta.arg);
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
    }
})

export default transactionSlice.reducer;
export const { activeEdit , deActiveEdit } = transactionSlice.actions;