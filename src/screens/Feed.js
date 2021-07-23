import React, {Component} from 'react'
import {View,StyleSheet, FlatList} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Fulano um',
            email: 'teste@teste.com',
            image: require('../../assets/imgs/fence.jpg'),
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
        },
        {
            id: Math.random(),
            nickname: 'Fulano dois',
            email: 'teste@teste.com',
            image: require('../../assets/imgs/fence.jpg'),
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
        },
        {
            id: Math.random(),
            nickname: 'Fulano tres',
            email: 'teste@teste.com',
            image: require('../../assets/imgs/fence.jpg'),
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
        },
        {
            id: Math.random(),
            nickname: 'Fulano quatro',
            email: 'teste@teste.com',
            image: require('../../assets/imgs/fence.jpg'),
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
        },
    ]
}

class Feed extends Component {

    state = {
        ...initialState
    }



    render() {
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList 
                    data={this.state.posts}    
                    keyExtractor = {item => `${item.id}`}
                    renderItem = {({ item }) => <Post key={item.id} {...item} />}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f5fcff'
    }
})

export default Feed
