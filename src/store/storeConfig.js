import {createStore, combineReducers} from 'redux'
import userReducer from './redurcers/user'
import postsReducer from './redurcers/posts'


const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig