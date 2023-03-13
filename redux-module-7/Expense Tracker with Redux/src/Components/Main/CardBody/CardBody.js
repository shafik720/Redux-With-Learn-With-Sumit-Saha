import React, { useState } from 'react';

const CardBody = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');

    console.log(title);
    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form action="">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="transaction_type"
                            checked
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="transaction_type"
                            placeholder="Expense"
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="transaction_amount"
                    />
                </div>

                <button className="btn">Add Transaction</button>
            </form>


            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default CardBody;