import React, {Component} from 'react'
import {View,StyleSheet, Image, Dimensions} from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'
import {connect} from 'react-redux'

class Post extends Component {
    render() {
        const addComment = this.props.name 
            ? <AddComment postId={this.props.id}/>
            : null

        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.image}}/>
                <Author email={this.props.email} nickname={this.props.nickname}/>
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(255,255,255)'
    },
    image: {
        marginTop: 10,
        paddingBottom:10,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width * 3/4,
        resizeMode:'contain',

    }
})

// export default Post
const mapStateToProps = ({user}) => {
    return {
        name:user.name,
    }
}

export default connect(mapStateToProps)(Post)
