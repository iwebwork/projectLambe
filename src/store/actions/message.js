import { SET_MESSAGE } from "../actions/actionTypes"

export const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}