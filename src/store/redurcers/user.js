import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case USER_LOGGED_IN: 
            return {
                // O spread garante que eu não perca os valores anteriores do meu objeto, assim mantendo a estabilidade do mesmo
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT: {
            return {
                ...state,
                name: null,
                email: null
            }
        }
        default: {return state}
    }
}

export default reducer