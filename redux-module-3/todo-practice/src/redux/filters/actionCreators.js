import { STATUS } from "./actionIdentifiers"


export const changeStatus = (updatedStatus) => {
    return{
        type : STATUS,
        payload : updatedStatus
    }
}