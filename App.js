/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {View,StyleSheet, Text} from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

class App extends Component {
	render() {

		const comments = [
			{
				nickname:'etese',
				comment:'teste 1'
			},
			{
				nickname:'etese',
				comment:'teste 1'
			}
		]

		return (
			<View style={[styles.container]}>
				<Header/>	
				<Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
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
