import { createStore } from "redux";
import {  rootReducer } from "./rootReducer";
import counterReducer from "./counter/counterReducer";


const store = createStore(rootReducer);

export default store;