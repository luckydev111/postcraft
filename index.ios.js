/**
 * Postcraft App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/index';
import configureStore from './src/store/configure-store';

const store = configureStore();

export default class postcraft extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('postcraft', () => postcraft);
