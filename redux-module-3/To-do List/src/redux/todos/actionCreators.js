
import {ADDED, ALLCOMPLETE, CLEARCOMPLETE, COLORSELECTED, DELETED, TOGGOLED, LOADED} from './actionIdentifiers'

export const loadServer = (todos) => {
    return{
        type : LOADED,
        payload : todos
    }
}

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

export const toggle = (id) => {
    return {
        type : TOGGOLED,
        payload : id,
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
