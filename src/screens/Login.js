import React, {Component} from 'react'
import {
    View,Text,StyleSheet,TouchableOpacity, TextInput
} from 'react-native'
import {connect} from 'react-redux'
import {login} from '../store/actions/user'

class Login extends Component {

    state = {
        name:'',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
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
                    onPress={this.login}
                    style={styles.button}
                    disabled={this.props.isLoading}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    disabled={this.props.isLoading}
                    onPress={() => {this.props.navigation.navigate('Register')}}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Criar nova conta ...
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
        borderColor:'#333'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

const mapStateToProps = ({user}) =>{
    return {
        isLoading: user.isLoading,
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)

