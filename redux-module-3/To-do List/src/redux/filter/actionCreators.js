import { COLORSELECTED, STATUSCHANGED } from "./actionIdentify"


export const colorChange = (colors, changeType) => {
    return {
        type : COLORSELECTED,
        payload : {
            color : colors,
            changeTypes : changeType
        }
    }
}

export const statusChange = (status) => {
    return {
        type : STATUSCHANGED,
        payload : status,
    }
}