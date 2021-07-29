import { ADD_POST, ADD_COMMENT } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-cod3rlambe.cloudfunctions.net',
            method: 'POST',
            data: {
                image: post.image.base64
            }
        })
        .catch(err => console.error(err))
        .then( res => {
            post.image = res.data.imageUrl
            axios.post('/posts/'+post.nickname+'.json', {...post})
                .catch(err => console.error(err))
                .then(res => console.log(res.data))
        })
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