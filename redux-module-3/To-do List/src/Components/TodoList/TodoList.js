import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filter);
    return (
            <div className="">
                {
                    todos.filter(todo => {
                        const {status} = filters;
                        console.log(todo);
                        switch (status) {
                            case 'complete':
                                return todo.completed;

                            case 'incomplete' : 
                                return !todo.completed;
                            default:
                                return true;
                        }
                    }).map(todo => <Todo
                        todo = {todo}
                        key = {todo.id}
                    ></Todo>)
                }
            </div>
    );
};

export default TodoList;