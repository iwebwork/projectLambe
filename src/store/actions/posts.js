import { 
    SET_POSTS, 
    ADD_COMMENT, 
    CREATING_POST,
    POST_CREATED 
} from "./actionTypes"
import axios from 'axios'
import {setMessage} from './message'

export const addPost = post => {
    return dispatch => {
        dispatch(creatingPosts())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-cod3rlambe.cloudfunctions.net',
            method: 'POST',
            data: {
                image: post.image.base64
            }
        })
        .catch(err => {
            dispatch(setMessage({title:'Erro',text:'Ocorreu um erro inesperado!'}))
        })
        .then(res => {
            post.image = res.data.imageUrl
            axios.post('/posts.json', {...post})
            .catch(err => {
                dispatch(setMessage({title:'Erro',text:'Ocorreu um erro inesperado!'}))                  
            })
            .then(res => {
                dispatch(setMessage({title:'Sucesso',text:'Post cadastrado com sucesso!'}))                  
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
        })
    }
}

export const addComment = payload => {
    return dispatch => {
        console.log(payload)
        axios.get('/posts/'+payload.postId+'.json')
            .catch(err => console.error(err))
            .then(response =>{
                const comments = response.data.comments || []
                comments.push(payload.comment)
                axios.patch('/posts/'+payload.comment.nickname+'/'+payload.postId+'.json', {comments})
                    .catch(err => console.error(err))
                    .then(response =>{
                        dispatch(fetchPosts())
                    })
            })
    }
    // return {
    //     type: ADD_COMMENT,
    //     payload
    // }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err =>{
                err => dispatch(setMessage({title:'Erro',text:'Ocorreu um erro ao listar os posts!'}))   
            })
            .then(response => {
                const rowPosts = response.data;
                const posts = []
                for (let key in rowPosts) {
                    posts.push({
                        ...rowPosts[key],
                        id: key
                    })
                }
                dispatch(setPosts(posts.reverse()));
            })
    }
}

export const creatingPosts = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED,
    }
}