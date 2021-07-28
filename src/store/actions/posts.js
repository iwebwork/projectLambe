import { ADD_POST, ADD_COMMENT } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios.post('/posts/'+post.nickname+'.json', {...post})
            .catch(err => console.error(err))
            .then(res => console.log(post))
    }
    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}