import React from 'react';
import editImg from '../../../../assets/images/edit.svg';
import deleteImg from '../../../../assets/images/delete.svg';

const Transaction = ({transaction}) => {
    const {name, type, amount, id} = transaction;
    console.log(name)
    return (
        <div className="conatiner_of_list_of_transactions">
            <ul>
                <li className={`transaction income ${type === 'expense' && 'error-bg'}`}>
                    <p>{name}</p>
                    <div className="right">
                        <p>৳ {amount}</p>
                        <button className="link">
                            <img
                                className="icon"
                                src={editImg}
                            />
                        </button>
                        <button className="link">
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