import React from 'react';
import editImg from '../../../../assets/images/edit.svg';
import deleteImg from '../../../../assets/images/delete.svg';
import { useDispatch } from 'react-redux';
import { activeEdit, removeTransaction } from '../../../../features/transactions/transactions';

const Transaction = ({transaction}) => {
    const {name, type, amount, id} = transaction;
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(activeEdit({
            name,
            type,
            amount,
            id
        }));
    }

    // --- deleting a transaction
    const handleDelete = () => {
        dispatch(removeTransaction(id));
    }
    return (
        <div className="conatiner_of_list_of_transactions">
            <ul>
                <li className={`transaction income ${type === 'expense' && 'error-bg'}`}>
                    <p>{name}</p>
                    <div className="right">
                        <p>৳ {amount}</p>
                        <button className="link" onClick={handleEdit}>
                            <img
                                className="icon"
                                src={editImg}
                            />
                        </button>
                        <button className="link" onClick={handleDelete}>
                            <img
                                className="icon"
                                src={deleteImg}
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Transaction;