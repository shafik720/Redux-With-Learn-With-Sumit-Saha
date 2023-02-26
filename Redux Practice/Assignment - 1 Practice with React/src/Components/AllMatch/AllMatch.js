import React from 'react';
import { useSelector } from 'react-redux';
import SingleMatch from './SingleMatch/SingleMatch';
import { useDispatch } from 'react-redux';
import { addMatch, incrementValue, resetMatch } from '../../Redux/actionCreators';

const AllMatch = () => {
    const matches = useSelector((state) => state.matches);

    const dispatch = useDispatch();

    const addNewMatch = () => {
        dispatch(addMatch(1));
    }

    const resetAll = () =>{
        dispatch(resetMatch());
    }

    return (
        <div>
            {/* <!-- matches  --> */}
            <div className="all-matches container">
                {/* <!-- Each form tag is Each row, This will render multiple times on Clicking 'Add Another Match' --> */}
                {
                    matches.map(match => <SingleMatch
                        key={match.id}
                        match={match}
                    ></SingleMatch>)
                }
                {/* <!-- for adding another matches --> */}
                <div className="add_match">
                    <button className="btn lws-addMatch" onClick={addNewMatch}>Add Another Match</button>
                    <button className="lws-reset" onClick={resetAll} >
                        <svg fill="none" width="24" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinecap="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
                            </path>
                        </svg>
                        <span>Reset</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllMatch;