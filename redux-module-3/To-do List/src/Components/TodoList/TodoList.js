import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../../redux/thunk/fetchData';
import Todo from './Todo/Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filter);

    // load data from server with Redux Thunk 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchData);
    },[dispatch])

    const filterByStatus = todo => {
        const { status } = filters;
        switch (status) {
            case 'complete':
                return todo.completed;

            case 'incomplete':
                return !todo.completed;
            default:
                return true;
        }
    }

    const filterByColors = todo => {
        const { colors } = filters;
        // console.log(todo);
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        }else{
            return true;
        }
    }
    return (
        <div className="">
            {
                todos.filter(filterByStatus).filter(filterByColors).map(todo => <Todo
                    todo={todo}
                    key={todo.id}
                ></Todo>)
            }
        </div>
    );
};

export default TodoList;