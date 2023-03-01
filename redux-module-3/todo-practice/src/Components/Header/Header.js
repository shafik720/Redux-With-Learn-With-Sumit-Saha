import React, { useState } from 'react';
import notesLogo from '../../assets/images/notes.png';
import doubleTickLogo from '../../assets/images/double-tick.png';
import plusImg from '../../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { addTask, clearCompleted, completeAllTask } from '../../redux/todos/actionCreators';

const Header = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addTask(input));
    }
    const controlInput = (e) => {
        setInput(e.target.value);
    }

    const completeTask = () => {
        dispatch(completeAllTask())
    }

    const clearTask = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
            <div>
                <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitForm}>
                    <img src={notesLogo} className="w-6 h-6" alt="Add todo" />
                    <input value={input} onChange={controlInput} type="text" placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" />
                    <button type="submit"
                        className={`appearance-none w-8 h-8 bg-[url("${plusImg}")] bg-no-repeat bg-contain`} ></button>
                </form>

                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li onClick={completeTask} className="flex space-x-1 cursor-pointer">
                        <img className="w-4 h-4" src={doubleTickLogo}alt="Complete" />
                        <span>Complete All Tasks</span>
                    </li>
                    <li onClick={clearTask} className="cursor-pointer">Clear completed</li>
                </ul>
            </div>
            <hr className="mt-4" />
        </div>
    );
};

export default Header;