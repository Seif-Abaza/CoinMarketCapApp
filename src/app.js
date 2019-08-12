/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Loading from './screens/loading';
import Main from './screens/main';


export default class App extends Component {

  state = {
    loading: true
  }

  render() {
    return this.state.loading ? <Loading /> : <Main />;
  }
}
