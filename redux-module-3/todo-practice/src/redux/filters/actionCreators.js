import { COLORSELECTOR, STATUS } from "./actionIdentifiers"


export const changeStatus = (updatedStatus) => {
    return{
        type : STATUS,
        payload : updatedStatus
    }
}

export const selectColor = (colorName, changeType) => {
    return {
        type : COLORSELECTOR,
        payload :
        {
            color : colorName,
            status : changeType
        }
    }
}