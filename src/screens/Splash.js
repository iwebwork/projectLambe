import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


class Splash extends Component {

    componentDidMount = () => {

        setTimeout(() => {
            this.props.navigation.navigate('Feed')
        }, 3000)
       
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image} 
                    source={require('../../assets/imgs/icon.png')}/>
                <Text style={styles.header}>
                    Lambe-Lambe
                </Text>
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
    header: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    image: {
        height:200,
        width: 200,
        resizeMode:'contain'
    }
})

export default Splash