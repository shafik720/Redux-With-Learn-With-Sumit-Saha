import React from 'react';
import { useSelector } from 'react-redux';
import cancelImg from '../../assets/images/cancel.png'
import Todo from './Todo/Todo';

const TodoList = () => {
    const todoState = useSelector((state) => state.todo);
    
    const filterState = useSelector((state) => state.filter);
    
    const {status, colors} = filterState;
    console.log(colors);
    return (
            <div>
                {
                    todoState.filter((todo)=>{
                        switch (status) {
                            case 'completed':
                                return todo.completed
                            
                            case 'incomplete' : 
                                return !todo.completed
                            default:
                                return true;
                        }
                    }).filter(todo=> {
                        if(colors.length > 0) {
                            return colors.includes(todo?.color);
                        }else{
                            return true;
                        }
                    }).map(todo => <Todo
                        key = {todo.id}
                        todo = {todo}
                    ></Todo>)
                }
            </div>
    );
};

export default TodoList;