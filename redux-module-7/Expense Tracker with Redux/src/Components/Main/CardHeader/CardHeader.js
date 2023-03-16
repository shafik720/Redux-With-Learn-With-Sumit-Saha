import React from 'react';
import { useSelector } from 'react-redux';

const CardHeader = () => {
    const transactionState = useSelector(state => state.transaction);
    const {transactions}  = transactionState ;
    // console.log(transactionState);

    const balance = (transaction) => {
        // console.log(transaction.amount);
        console.log(transactions);
        let balances = 0 ;
        transaction.forEach(index => {
            if(index.type === 'income'){
                balances += index.amount;
            }else{
                balances -= index.amount;
            }
        })
        return balances;
    }
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{balance(transactions)}</span>
            </h3>
        </div>
    );
};

export default CardHeader;