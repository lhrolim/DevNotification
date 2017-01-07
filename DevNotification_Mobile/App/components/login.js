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

import React, {
    Component,
} from 'react';

import { connect } from 'react-redux'
import { lock,redirectFromLockScreen } from '../core/auth/actions'

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
            dispatch(redirectFromLockScreen(token.refreshToken,token.idToken,profile))
        });
    }

    render() {
        return (
            <View>
            </View>
        );
    }

}



function mapStateToProps(state) {
    const {authState} = state;

    return {
        authState
    }
}

export default connect(mapStateToProps)(LoginComponent);