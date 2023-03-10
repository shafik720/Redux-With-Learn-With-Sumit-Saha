import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChange, statusChange } from '../../redux/filter/actionCreators';

const Footer = () => {
    // getting state for todo list
    const todoState = useSelector((state) => state.todos);

    // getting state for filtering
    const filterState = useSelector((state) => state.filter)
    const {status , colors} = filterState;

    // getting action dispatch for filtering
    const dispatch = useDispatch();

    const statusChanger = (status) => {
        dispatch(statusChange(status));
    }

    // changing color 
    const changeColor = (color) =>{
        if(colors.includes(color)){
            dispatch(colorChange(color, 'removed'));
        }else{
            dispatch(colorChange(color, 'added'));
        }
    }
    
    // Counting how many task is left
    const todoIncompleteQuantity = () => {
        const quantity = todoState.filter(todo => !todo.completed);
        const todoNumber = quantity.length;

        switch (todoNumber) {
            case 0 :
                return 'No task Left';
        
            case 1 : 
                return '1 Task left';

            default:
                return `${todoNumber} Tasks left`
        }
    }
    return (
        <div>
            <hr className="mt-4" />
            <div className="mt-4 flex justify-between text-xs text-gray-500">
                <p>{todoIncompleteQuantity()}</p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li className={`cursor-pointer ${status=='all' && 'font-bold'}`} onClick={()=>statusChanger('all')}>All</li>
                    <li>|</li>
                    <li  className={`cursor-pointer ${status=='incomplete' && 'font-bold'}`} onClick={()=>statusChanger('incomplete')}>Incomplete</li>
                    <li>|</li>
                    <li  className={`cursor-pointer ${status=='complete' && 'font-bold'}`} onClick={()=>statusChanger('complete')}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`} onClick={() => changeColor('green')}>
                    </li>
                    <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}   onClick={() => changeColor('red')}></li>
                    <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}   onClick={() => changeColor('yellow')}>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;