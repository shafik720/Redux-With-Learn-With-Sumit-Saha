import { combineReducers } from "redux";
import { filterReducer } from "./filter/filterReducer";
import { todoReducer } from "./todos/todoReducer";


export const rootReducer = combineReducers({
    todos : todoReducer,
    filter : filterReducer
});