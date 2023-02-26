import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMatch } from '../../../Redux/actionCreators';
import deleteImg from '../../../utilities/image/delete.svg';



const SingleMatch = (props) => {
    const { id, score } = props.match;

    const dispatch = useDispatch();
    const removeMatch = (id) => {
        dispatch(deleteMatch(id));
    }

    return (
        <div className="">
            <div className="match">
                <div className="wrapper">
                    <button className="lws-delete" onClick={()=>removeMatch(id)}>
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