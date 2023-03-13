import { editTransaction, getTransactionData } from "./transactionsApi"




const fetchTransaction = ('transaction/fetchData', async()=>{
    const data = await getTransactionData() ;
    return data;
})

const changeTransaction = ('transaction/editData', async({id, data})=>{
    const data = await editTransaction()
})