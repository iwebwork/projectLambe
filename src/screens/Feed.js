import React, {Component} from 'react'
import {View,StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Post from '../components/Post'

import {fetchPosts} from '../store/actions/posts'


class Feed extends Component {

    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    login = () => {this.props.navigation.navigate('Profile')}

    render() {
        return(
            <View style={styles.container}>
                <Header login={this.login} />
                <FlatList 
                    data={this.props.posts}    
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

// export default Feed

const mapStateToProps = ({posts}) => {
    return {
        posts: posts.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)