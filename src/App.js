import React, {Component} from 'react'
import {Alert,LogBox} from 'react-native'
import {connect} from 'react-redux'
import Navigator from './navigation/Navigator'
import {setMessage} from '../src/store/actions/message'

class App extends Component {

    componentDidUpdate = () => {
        LogBox.ignoreAllLogs();//Ignore all log notifications
        if(this.props.text && this.props.text.toString().trim()){
            Alert.alert(this.props.title || 'Mensagem', this.props.text)
            this.props.clearMessage()
        }
    }
    
    render() {
        return (
            <Navigator/>
        )
    }
}

const mapStateToProps = ({message}) => {
    return {
        title: message.title,
        text: message.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(setMessage({title: '', text: ''}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App