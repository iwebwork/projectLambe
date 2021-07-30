import {USER_LOGGED_IN, USER_LOGGED_OUT, USER_LOADED, LOADING_USER} from '../actions/actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyAu4qCNgMpUbiXtR_BwKbJXhFR_y0e_UT8'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    }
}

export const createUser = (user) =>{
    return dispatch => {
        console.log(user)
        axios.post(authBaseURL + '/signupNewUser?key='+API_KEY, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.error(err))
        .then((response) => {
            if(response.data.localId){
                axios.put('/users/'+response.data.localId+'.json',{
                    name: user.name
                }).catch(err => console.error(err))
                .then((response) => {
                    console.log(response.data)
                })
            }
        })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch(loadingUser())
        console.log(user)
        axios.post(authBaseURL + '/verifyPassword?key='+API_KEY, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.log('Deu muito ruii na primeira: '+err))
        .then(response =>{
            if(response.data.localId){
                axios.get('/users/'+response.data.localId+'.json')
                .catch(err => console.log('Deu muito ruii'+err))
                .then(response => {
                    user.password = null
                    user.name = response.data.name 
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}