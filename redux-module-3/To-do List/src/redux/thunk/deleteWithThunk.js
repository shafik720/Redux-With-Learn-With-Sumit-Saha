import { deleteSingle } from "../todos/actionCreators";


const deleteWithThunk = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: "DELETE"
        })

        dispatch(deleteSingle(id))
    }
}

export default deleteWithThunk;