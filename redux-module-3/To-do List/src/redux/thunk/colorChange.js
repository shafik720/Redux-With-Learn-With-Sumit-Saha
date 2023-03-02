import { colorSelection } from "../todos/actionCreators";


const colorChange = (id, color) => {
    return async(dispatch) =>{
        const response = await fetch(`http://localhost:9000/todos/${id}`,{
            method : "PATCH",
            body : JSON.stringify({
                color : color,
            }),
            headers : {
                'Content-type' : 'application/json ; charset=UTF-8',
            }
        })
        const todo = await response.json();
    
        dispatch(colorSelection(todo.id, color))
    }
}

export default colorChange;