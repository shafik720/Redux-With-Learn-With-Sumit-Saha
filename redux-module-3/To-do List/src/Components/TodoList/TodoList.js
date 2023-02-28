import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
            <Todo></Todo>
    );
};

export default TodoList;