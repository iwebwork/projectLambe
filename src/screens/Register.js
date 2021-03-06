import React, {Component} from 'react'
import {
    View,Text,StyleSheet,TouchableOpacity, TextInput,
} from 'react-native'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/user'

class Register extends Component {

    state = {
        name: '',
        email: '',
        password:''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name: '',
                email: '',
                password:''
            })
            this.props.navigation.navigate('Feed')
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <TextInput  
                    placeholder="Nome" 
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput  
                    placeholder="Email" 
                    style={styles.input}
                    autoFocus={true}
                    keyboard='email-address'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput  
                    style={styles.input}
                    placeholder={"Senha"}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />

                <TouchableOpacity 
                    onPress={() => { 
                            if(this.state.password.length < 9){
                                alert('Por favor, insira uma senha com mais de 8 caracteres')
                                return
                            }

                            this.props.onCreateUser(this.state)
                        }
                    }
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Salvar
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop:30,
        padding:10,
        backgroundColor:'#4286f4',
        width: 100,
        borderRadius:30,
        alignItems: 'center',
        
    },
    buttonText: {
        fontSize: 20,
        color:'#FFF'
    },
    input: {
        marginTop:20,
        width:'90%',
        backgroundColor:'#EEE',
        height:40,
        borderWidth:1,
        borderColor:'#333',
        borderRadius:15
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

const mapStateToProps = ({user}) =>{
    return {
        isLoading: user.isLoading,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
// export default Register