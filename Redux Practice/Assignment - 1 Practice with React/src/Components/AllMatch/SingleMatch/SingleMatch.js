import React from 'react';
import deleteImg from '../../../utilities/image/delete.svg';



const SingleMatch = (props) => {
    const { id, score } = props.match;


    return (
        <div className="">
            <div className="match">
                <div className="wrapper">
                    <button className="lws-delete">
                        <img src={deleteImg} alt="" />
                    </button>
                    <h3 className="lws-matchName">Match {id}</h3>
                </div>
                <div className="inc-dec">
                    <form className="incrementForm">
                        <h4>Increment</h4>
                        <input type="number" name="increment" className="lws-increment" />
                    </form>
                    <form className="decrementForm">
                        <h4>Decrement</h4>
                        <input type="number" name="decrement" className="lws-decrement" />
                    </form>
                </div>
                <div className="numbers">
                    <h2 className="lws-singleResult">{score}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default SingleMatch;