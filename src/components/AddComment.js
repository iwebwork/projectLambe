import React, {Component} from 'react'
import {View,StyleSheet, Text,TextInput, TouchableWithoutFeedback as TWF, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment:'',
        editMode:false
    }

    handleAddComment = () => {
        Alert.alert('add comment Funfou', this.state.comment,)
    }

    render() {
        let commentArea = null
        if(this.state.editMode){
            commentArea = (
                <View style={styles.container}>
                    <TextInput 
                        placeholder='Adicione seu comentario...' 
                        style={styles.input} 
                        autoFocus={true} value={this.state.comment}
                        onChangeText={comment => this.setState({comment})}
                        onSubmitEditing={this.handleAddComment}
                    />

                    <TWF onPress={() => this.setState({editMode:false})}>
                        <Icon name='times' size={15} color='#555'/>
                    </TWF>
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={15} color='#555'/>
                        <Text style={styles.caption}>Adicione um comentario...</Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{flex: 1}} >
                {commentArea}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin:10,
        color:'#fff'
    },
    caption: {
        marginLeft:10,
        fontSize:12,
        color:'#CCC'
    },
    input: {
        width:'90%',
        color:'#000'
    }
})

export default AddComment
