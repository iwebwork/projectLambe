import {USER_LOGGED_IN, USER_LOGGED_OUT, USER_LOADED, LOADING_USER} from '../actions/actionTypes'
import axios from 'axios'
import {setMessage} from './message'


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
        dispatch(loadingUser())
        axios.post(authBaseURL + '/signupNewUser?key='+API_KEY, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => {
            dispatch(setMessage({title:'Erro',text:'Ocorreu um erro inesperado!'}))
        })
        .then((response) => {
            if(response.data.localId){
                axios.put('/users/'+response.data.localId+'.json',{
                    name: user.name
                }).catch(err =>{
                    dispatch(setMessage({title:'Erro',text:'Ocorreu um erro ao criar o usuário, tente novamente!'}))
                })
                .then(() => {
                    dispatch(login(user))
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
        .catch(err => {
            dispatch(setMessage({title:'Erro',text:'Ocorreu um erro no login, tente novamente!'}))
        })
        .then(response =>{
            if(response.data.localId){
                user.token = response.data.idToken
                axios.get('/users/'+response.data.localId+'.json')
                .catch(err => dispatch(setMessage({title:'Erro',text:'Ocorreu um erro ao realizar o login, tente novamente!'})))
                .then(response => {
                    delete user.password
                    user.name = response.data.name 
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}