import axios from '../../utils/axios';



export const getTransactionData = async() => {
    const response = await axios.get('/transactions');
    return response.data;
}

export const addTransaction = async(datas) => {
    const response = await axios.post(`/transactions`, datas);
    return response.data;
}

export const editTransaction = async({id, data}) => {
    const response = await axios.put(`/transactions/${id}`, data)
    return response.data;
}

export const deleteTransaction = async(id) => {
    // console.log(id);
    const response = await axios.delete(`/transactions/${id}`);
    return response.data;
}