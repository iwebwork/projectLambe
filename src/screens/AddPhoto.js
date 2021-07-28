import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPost} from '../store/actions/posts'
import {
    View,Text,StyleSheet, TouchableOpacity, 
    TextInput,Image,Dimensions,ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const noUser = 'Você precisa está logado para adicionar uma imagem!'

class AddPhoto extends Component {
    state={
        image:null,
        comment:''
    }

    pickImage = () => {
        if(!this.props.name){
            Alert.alert('Aviso!', noUser)
            return 
        }

        ImagePicker.showImagePicker({
            title:'Escolha a imagem',
            maxHeight:1040,
            maxWidth: 920,
        }, res =>{
            if(!res.didCancel) {
                this.setState({image : {uri: res.uri, base64: res.data}})
            }
        })
    }

    save = async () => {
        if(!this.props.name){
            Alert.alert('Aviso!', noUser)
            return 
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({image: null, comment: ''})
        this.props.navigation.navigate('Feed')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.AreaImage}>
                    <Text style={styles.title}>
                        Compartilhe uma imagem 
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.image}/>
                    </View>
                </View>
                <View style={styles.containerTwo}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.pickImage}
                    >
                        <Text style={styles.buttonText}>
                            Escolha a foto
                        </Text>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder={'Algum comentario para a foto?'} 
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={(comment) => this.setState({comment})}
                        editable={this.props.name != null}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.save}
                    >
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
    },
    containerTwo:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    AreaImage:{
        flex: 1,
        alignItems:'center',
        width:'99%',
    },
    title: {
        fontSize:20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    button: {
        padding:10,
        backgroundColor:'#4286f4',
        
    },
    buttonText: {
        fontSize: 20,
        color:'#FFF',
        textAlign: 'center'
    },
    input: {
        color:'#000',
        marginTop: 20,
        width: '90%'
    },
    image: {
        width:'95%',
        height:Dimensions.get('window').height * 3 / 7,
        resizeMode: 'center',
        margin:10
    },
    imageContainer:{
        width:'90%',
        height:Dimensions.get('window').width * 3 / 4,
        backgroundColor:'#EEE',
        marginTop:10
    },
}) 

// export default AddPhoto
const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
