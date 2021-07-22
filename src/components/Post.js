import React, {Component} from 'react'
import {View,StyleSheet, Image, Dimensions} from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.image}/>
                <Author email={'igorsiqueira.adm@gmail.com'} nickname={'Cicrano de tal'}/>
                <Comments comments={this.props.comments} />
                <AddComment/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width * 3/4,
        resizeMode:'contain'
    }
})

export default Post
