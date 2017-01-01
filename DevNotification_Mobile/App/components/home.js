'use strict';

var Auth0Lock = require('react-native-lock');

var lock = new Auth0Lock({ clientId: "oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho", domain: "plg.auth0.com" });

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
} from 'react-native';

import React, {
    Component,
} from 'react';

import { connect } from 'react-redux'
import { init } from '../core/auth/actions'

//import store from '../actions/root/store'

class HomeComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }

}



function mapStateToProps(state){
  const {authState} = state; 

  return {
    authState
  }
}

export default connect(mapStateToProps)(HomeComponent);