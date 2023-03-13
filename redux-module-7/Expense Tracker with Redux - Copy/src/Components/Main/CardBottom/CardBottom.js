import React from 'react';

const CardBottom = () => {
    return (
        <div class="conatiner_of_list_of_transactions">
            <ul>
                <li class="transaction income">
                    <p>Earned this month</p>
                    <div class="right">
                        <p>৳ 100</p>
                        <button class="link">
                            <img
                                class="icon"
                                src="./images/edit.svg"
                            />
                        </button>
                        <button class="link">
                            <img
                                class="icon"
                                src="./images/delete.svg"
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CardBottom;