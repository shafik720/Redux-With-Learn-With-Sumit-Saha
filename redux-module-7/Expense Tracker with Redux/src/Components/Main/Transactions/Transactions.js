import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../../features/transactions/transactions';
import Transaction from './Transaction/Transaction';

const Transactions = () => {
    const transactionState = useSelector(state => state.transaction);
    // console.log(transactionState);
    const {isLoading, isError, error, transactions} = transactionState ;

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTransactions());
    },[dispatch])

    let content = null ;
    if(isLoading && !isError) content = <p>Loading...</p>;
    if(!isLoading && isError) content = <p>{error}</p>
    if(!isLoading && !isError && transactions.length === 0) content = <p>No Transactions Found !</p>
    if(!isLoading && !isError && transactions.length > 0) content = transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id}></Transaction>)

    return (
        <div>
            {content}
        </div>
    );
};

export default Transactions;