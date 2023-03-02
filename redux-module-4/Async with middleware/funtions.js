const { default: fetch } = require("node-fetch");


const fetchingFunction = async(dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todo = await response.json();

    dispatch({
        type : 'todos/loaded',
        payload : todo
    })
    console.log(`Number of updated todos: ${getState().todos.length}`);

}


module.exports = {
    fetchingFunction
}