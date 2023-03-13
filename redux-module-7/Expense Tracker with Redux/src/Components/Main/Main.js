import React from 'react';
import CardBody from './CardBody/CardBody';
import CardBottom from './CardBottom/CardBottom';
import CardHeader from './CardHeader/CardHeader';
import Transactions from './Transactions/Transactions';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <CardHeader></CardHeader>

                <CardBody></CardBody>

                <p className="second_heading">Your Transactions:</p>
                <Transactions></Transactions>
            </div>
        </div>
    );
};

export default Main;