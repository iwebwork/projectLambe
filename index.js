import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation/Navigator'
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigation/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
