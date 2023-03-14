import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deActiveEdit, newTransaction } from '../../../features/transactions/transactions';

const CardBody = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();
    // --- adding new transactions
    const handleCreateSubmit = (e) => {
        e.preventDefault();
        if (!isEdit) {
            dispatch(
                newTransaction({
                    name: title,
                    type: type,
                    amount: Number(amount)
                }));
        }
        resetForm();
    }

    const resetForm = () => {
        setTitle('');
        setType('');
        setAmount('');
    }
    // --- Cancel Edit functionality
    const handleCancelEdit = () => {
        dispatch(deActiveEdit());
        resetForm();
    }

    // --- getting state for editing transaction
    const transactionState = useSelector(state => state.transaction);
    const { error, isError, editing } = transactionState;

    useEffect(() => {
        const { id, name, type } = editing || {};

        if (id) {
            // --- passing all information to the form for editing transaction
            setIsEdit(true);
            setTitle(name);
            setType(type);
            setAmount(editing.amount)
        } else {
            setIsEdit(false);
        }
    }, [editing]);

    // --- updating new edited transaction


    return (
        <div className="form">
            {isEdit ? <h3>Edit transaction</h3> : <h3>Add new transaction</h3>}

            <form action="" onSubmit={handleCreateSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                        value={title}
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
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={e => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        required
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                {isEdit ? <button className="btn">Update Transaction</button> : <button className="btn">Add Transaction</button>}

            </form>

            {isError && <p>{error}</p>}
            {isEdit && <button className="btn cancel_edit" onClick={handleCancelEdit}>Cancel Edit</button>}
        </div>
    );
};

export default CardBody;