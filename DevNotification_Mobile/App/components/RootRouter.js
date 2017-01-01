'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Navigator,
  Text,
  StatusBar,
} from 'react-native';
import { Router, Route, Scene, Animations, TabBar, Actions } from 'react-native-router-flux';


import Splash from './splash';
import Login from './login';
import Home from './home';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="splash" title={'Dev Notification'} component={Splash} initial={true} />
    <Scene key="login" title={'Login'} component={Login} />
    <Scene key="home" title={'Home'} component={Home} />
  </Scene>
);

const ConnectedRouter = connect()(Router)

class RootRouter extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return <ConnectedRouter scenes={scenes} />
  }
}

export default connect(state => ({
  state: state.authState
})
)(RootRouter);