
import {ADDED, ALLCOMPLETE, CLEARCOMPLETE, COLORSELECTED, DELETED, TOGGOLED} from './actionIdentifiers'

export const addTask = (todoText) => {
    return{
        type : ADDED,
        payload : todoText
    }
}

export const completeAll = () => {
    return{
        type : ALLCOMPLETE
    }
}

export const toggle = (toggleId) => {
    return {
        type : TOGGOLED,
        payload : toggleId,
    }
}

export const colorSelection = (id, color) => {
    return {
        type : COLORSELECTED,
        payload : {
            elementId : id,
            colors : color
        }
    }
}

export const clearCompleted = () => {
    return{
        type : CLEARCOMPLETE
    }
}

export const deleteSingle = (id) => {
    return {
        type : DELETED,
        payload : id
    }
}  
