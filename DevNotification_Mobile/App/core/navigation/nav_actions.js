import * as types from "./nav_actionTypes"

export const showSpinner= ()=>{
    return {type: types.ShowSpin }
}

export const hideSpinner= ()=>{
    return {type: types.HideSpin }
}