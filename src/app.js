import React, { Component } from 'react';

import Loading from './screens/loading';
import Main from './screens/main';

import { getCoinsData } from './API/gets';

export default class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    getCoinsData()
    .then(res => res.json())
    .then(({data}) => this.setState({data}))
    .catch(console.warn);
  }

  render() {
    return this.state.data === null ? <Loading /> : <Main coins={this.state.data} />;
  }
}
