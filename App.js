/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {View,StyleSheet} from 'react-native'

import Header from './src/components/Header'

class App extends Component {
	render() {
		return (
			<View style={[styles.container]}>
				<Header/>	
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#FFF'
	}
})

export default App
