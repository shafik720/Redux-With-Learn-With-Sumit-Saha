import React, { useState } from 'react';
import notesLogo from '../../assets/images/notes.png';
import doubleTickLogo from '../../assets/images/double-tick.png';
import plusImg from '../../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { addTask, clearCompleted, completeAll } from '../../redux/todos/actionCreators';

const Header = () => {
    // making a controlled input field by state with react
    const[input, setInput] = useState('');
    const controlInput = (e) =>{
        setInput(e.target.value);
    }

    const dispatch = useDispatch();
    // for adding new task
    const addNewTask = (e) => {
        e.preventDefault();
        dispatch(addTask(input));
    }

    // for making all task completed
    const makeCompleteAll = () =>{
        dispatch(completeAll());
    }

    // for clearing all completed task
    const clearAllCompleted = () =>{
        dispatch(clearCompleted());
    }
    return (
        <div>
            <div>
                <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={addNewTask}>
                    <img src={notesLogo} className="w-6 h-6" alt="Add todo" />
                    <input type="text" placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" 
                        value = {input}
                        onChange={controlInput}
                        />
                    <button type="submit"
                        className={`appearance-none w-8 h-8 bg-[url("${plusImg}")] bg-no-repeat bg-contain`} ></button>
                </form>

                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li className="flex space-x-1 cursor-pointer" onClick={makeCompleteAll}>
                        <img className="w-4 h-4" src={doubleTickLogo}alt="Complete" />
                        <span>Complete All Tasks</span>
                    </li>
                    <li className="cursor-pointer" onClick={clearAllCompleted}>Clear completed</li>
                </ul>
            </div>
            <hr className="mt-4" />
        </div>
    );
};

export default Header;