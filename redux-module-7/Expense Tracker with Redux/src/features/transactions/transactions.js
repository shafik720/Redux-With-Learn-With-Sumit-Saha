import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, editTransaction, getTransactionData } from "./transactionsApi"


const initialState = [
    {
        transactions : [],
        isError : false,
        isLoading : false,
        error : ''
    }
]


export const fetchTransactions = createAsyncThunk('transaction/fetchData', async()=>{
    const data = await getTransactionData();
    return data;
}) 

export const changeTransactions = createAsyncThunk('transaction/editData', async({id, data})=>{
    const transaction = await editTransaction({id, data});
    return transaction;
})

export const newTransaction = createAsyncThunk('transaction/addData', async({data})=>{
    const transaction = await addTransaction({data});
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/deleteData', async({id})=>{
    const transaction = await deleteTransaction({id});
    return transaction;
})