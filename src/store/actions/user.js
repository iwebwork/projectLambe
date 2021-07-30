import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyAu4qCNgMpUbiXtR_BwKbJXhFR_y0e_UT8'

export const login = user => {
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