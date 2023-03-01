import React from 'react';
import { useSelector } from 'react-redux';
import cancelImg from '../../assets/images/cancel.png'
import Todo from './Todo/Todo';

const TodoList = () => {
    const todoState = useSelector((state) => state.todo);
    // console.log(todoState);
    return (
            <div>
                {
                    todoState.map(todo => <Todo
                        key = {todo.id}
                        todo = {todo}
                    ></Todo>)
                }
            </div>
    );
};

export default TodoList;