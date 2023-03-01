
import {ADDTASK, COMPLETEALLTASK, CLEARCOMPLETED, DELETETASK, COLORSELECT, TOGGLE } from './actionIdentifiers';

export const addTask = (text) => {
    return{
        type : ADDTASK,
        payload : text
    }
}

export const completeAllTask = () => {
    return{
        type : COMPLETEALLTASK
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}

export const deleteTask = (id) => {
    return {
        type : DELETETASK,
        payload : id
    }
}

export const colorSelect = (id, color, changeType) => {
    return{
        type : COLORSELECT,
        payload : {
            id,
            color,
            changeType
        }
    }
}

export const toggle = (id, changeType) => {
    return{
        type : TOGGLE,
        payload : id
    }
}