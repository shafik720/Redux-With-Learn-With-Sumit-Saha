import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newTransaction } from '../../../features/transactions/transactions';
import { addTransaction } from '../../../features/transactions/transactionsApi';

const CardBody = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();
    const handleCreateSubmit = (e) =>{
        e.preventDefault();
        dispatch(
            newTransaction({
            name : title,
            type : type,
            amount : Number(amount) 
        }))
    }

    const transactionState = useSelector(state => state.transaction);
    const {error, isError} = transactionState;
    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form action="" onSubmit={handleCreateSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            required
                            checked = {type === 'income'}
                            onChange = {() => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked = {type === 'expense'}
                            onChange= {e => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        required
                        onChange = {e => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn">Add Transaction</button>
            </form>
            
            {isError && <p>{error}</p>}
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default CardBody;