import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    // console.log(todos.map(index=>index));
    return (
            <div className="">
                {
                    todos.map(todo => <Todo
                        todo = {todo}
                        key = {todo.id}
                    ></Todo>)
                }
            </div>
    );
};

export default TodoList;