import { addTask } from "../todos/actionCreators";


const addToDo = (toDoText) => {
    return async(dispatch) =>{
        const response = await fetch('http://localhost:9000/todos',{
            method : "POST",
            body : JSON.stringify({
                text : toDoText,
                completed : false,
            }),
            headers : {
                'Content-type' : 'application/json ; charset=UTF-8',
            }
        })
        const todo = await response.json();
    
        dispatch(addTask(todo.text))
    }
}

export default addToDo;