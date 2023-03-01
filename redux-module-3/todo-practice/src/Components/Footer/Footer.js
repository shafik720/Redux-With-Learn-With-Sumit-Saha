import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../../redux/filters/actionCreators';

const Footer = () => {
    const todoState = useSelector((state) => state.todo);
    const getTaskQuantity = () => {
        const task =  todoState.filter(todo => !todo.completed);
        
        switch (task.length) {
            case 0:
                return "No Tasks Left"
        
            case 1 : 
            return "1 Task Left"

            default:
                return `${task.length} Tasks Left`;
        }
    }

    const filterState = useSelector((state) => state.filter);
    const {status, colors} = filterState;
    
    const dispatch = useDispatch();

    const changeTaskStatus = (updateStatus) =>{
        dispatch(changeStatus(updateStatus));
    }
    return (
        <div>
            {/* <hr className="mt-4" /> */}
            <div className="mt-4 flex justify-between text-xs text-gray-500">
                <p>{getTaskQuantity()}</p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li  onClick={() => changeTaskStatus('all')}  className={`cursor-pointer ${status === 'all' && 'font-bold'}`}>All</li>
                    <li>|</li>
                    <li onClick={() => changeTaskStatus('incomplete')}   className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}>Incomplete</li>
                    <li>|</li>
                    <li onClick={() => changeTaskStatus('complete')}  className={`cursor-pointer ${status === 'completed' && 'font-bold'}`}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500">
                    </li>
                    <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                    <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer">
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;