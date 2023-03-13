import React from 'react';
import CardBody from './CardBody/CardBody';
import CardBottom from './CardBottom/CardBottom';
import CardHeader from './CardHeader/CardHeader';

const Main = () => {
    return (
        <div class="main">
            <div class="container">
                <CardHeader></CardHeader>

                <CardBody></CardBody>

                <p class="second_heading">Your Transactions:</p>

                <CardBottom></CardBottom>
            </div>
        </div>
    );
};

export default Main;