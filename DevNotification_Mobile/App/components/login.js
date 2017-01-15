'use strict';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
} from 'react-native';

import React, { Component, } from 'react';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import { lock, redirectFromLockScreen } from '../core/auth/actions'

//import store from '../actions/root/store'

class LoginComponent extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        lock.show({
            closable: true,
            authParams: {
                scope: "openid email offline_access",
                device: "test"
            },
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }
            dispatch(redirectFromLockScreen(token.refreshToken, token.accessToken, token.idToken, profile))
        });
    }


    componentDidUpdate() {
        const { isAuthenticated } = this.props
        if (isAuthenticated) {
            return Actions.home();
        }else{
            return Actions.login();
        }
    }



    render() {
        return (
            <View>
            </View>
        );
    }

}



const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authState.authenticated,
    }
}

export default connect(mapStateToProps)(LoginComponent);