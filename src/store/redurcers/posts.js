import { ADD_POST } from "../actions/actionTypes";

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Fulano tres',
            email: 'teste@teste.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments:[
                {
                    nickname: 'etese',
                    comment:'teste 1'
                },
                {
                    nickname: 'etese',
                    comment:'teste 1'
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer
