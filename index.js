import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation/Navigator'
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://cod3rlambe-default-rtdb.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigation/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
