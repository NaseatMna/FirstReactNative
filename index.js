import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configStore';

const store = configureStore();

export default class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FirtsReactNative', () => ReduxCounterUniversal);
