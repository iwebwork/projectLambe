import React, {Component} from 'react'
import {
    View,Text,StyleSheet,TouchableOpacity, TextInput
} from 'react-native'
import {connect} from 'react-redux'
import {login, userLoaded} from '../store/actions/user'

class Login extends Component {

    state = {
        name:'',
        email: '',
        password: '',
    }

    componentDidUpdate = () => {
        if(this.props.token){
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({...this.state})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput  
                    placeholder="Email" 
                    style={styles.input}
                    autoFocus={true}
                    keyboard='email-address'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    placeholderTextColor={'#9B97A8'}

                />
                <TextInput  
                    style={styles.input}
                    placeholder={"Senha"}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    placeholderTextColor={'#9B97A8'}
                />

                <TouchableOpacity 
                    onPress={this.login}
                    style={[styles.button,styles.buttonLogin]}
                    disabled={this.props.isLoading}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.buttonCreate]}
                    onPress={() => {this.props.navigation.navigate('Register')}}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Não tem uma conta?
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
        backgroundColor: '#4286f4',
        alignItems: 'center',
    },
    buttonLogin:{
        width: 100,
        borderRadius:30
    },
    buttonCreate:{
        width: 250,
        borderRadius:75
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
        borderRadius:15,
        color:'#000'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user)),
        onUserLoaded: () => dispatch(userLoaded())
    }
}

const mapStateToProps = ({user}) =>{
    return {
        token: user.token
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)

