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
import MainDrawer from './maindrawer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { COLOR, ThemeProvider } from 'react-native-material-ui';


const uiTheme = {
  palette: {
    primaryColor: COLOR.blue500,
    accentColor: COLOR.pink500,
  },
};

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="splash" title={'Dev Notification'} component={Splash} initial={true} />
    <Scene key="login" title={'Login'} component={Login} />
    <Scene key="home" title={'Home'} component={Home} hideNavBar={true} />
    <Scene key="drawer" component={MainDrawer} hideNavBar={true} />
  </Scene>
);

const ConnectedRouter = connect()(Router)

class RootRouter extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>

        <ConnectedRouter scenes={scenes} >
          
        </ConnectedRouter>
      </ThemeProvider>

    )
  }
}

export default connect(state => ({
  state: state.authState
})
)(RootRouter);