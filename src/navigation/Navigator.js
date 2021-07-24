import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {  createSwitchNavigator} from '@react-navigation/compat'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
import Feed from '../screens/Feed';
import AddPhoto from '../screens/AddPhoto'
import Profile from '../screens/Profile'
import Login from '../screens/Login'

const LoginOrProfileRouter = createSwitchNavigator(
    {
        Profile: Profile,
        Auth: Login
    }, 
    {
        initialRouteName : 'Profile'
    }
)

const Tab = createBottomTabNavigator()
 
const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Feed'}
        tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name={'Feed'}
          component={Feed}
          options={{
            title: 'Feed',
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="home"
                size={30}
                color={focused ? '#12327a' : '#000'}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'AddPhoto'}
          component={AddPhoto}
          options={{
            title: 'Adicionar foto',
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="camera"
                size={30}
                color={focused ? '#12327a' : '#000'}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={LoginOrProfileRouter}
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                size={30}
                color={focused ? '#12327a' : '#000'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
 
export default Navigator;