import { addTask, toggle } from "../todos/actionCreators";


const toggleChange = (id, currentStatus) => {
    return async(dispatch) =>{
        const response = await fetch(`http://localhost:9000/todos/${id}`,{
            method : "PATCH",
            body : JSON.stringify({
                completed : !currentStatus,
            }),
            headers : {
                'Content-type' : 'application/json ; charset=UTF-8',
            }
        })
        const todo = await response.json();
    
        dispatch(toggle(todo.id))
    }
}

export default toggleChange;