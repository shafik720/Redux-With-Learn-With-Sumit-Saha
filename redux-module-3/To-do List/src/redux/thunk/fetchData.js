import { loadServer } from "../todos/actionCreators";


const fetchData = async(dispatch) =>{
    const response = await fetch('http://localhost:9000/todos')
    const todo = await response.json();

    dispatch(loadServer(todo))
}

export default fetchData;