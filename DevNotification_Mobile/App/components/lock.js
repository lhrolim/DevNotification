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

class LockApp extends Component {

    componentDidMount() {
        lock.show({
            closable: true,
            authParams: {
                scope: "openid email offline_access",
            },
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }
            this.setState({
                token: token,
                profile: profile,
                logged: true,
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }


}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    token: {
        flex: 1,
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFF',
    },
    actionButton: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16214D',
        borderRadius: 5,
        margin: 8,
    },
    actionButtonText: {
        color: '#ffffff',
    },
    message: {
        fontFamily: 'HelveticaNeue-Thin',
        fontSize: 14,
        alignSelf: 'center',
    },

    // Token View
    tokenContainer: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#D0D2D3',
        margin: 8,
        padding: 10,
    },
    label: {
        fontFamily: 'HelveticaNeue-Medium',
        marginTop: 10,
    },
    value: {
        fontFamily: 'HelveticaNeue-Light',
        alignSelf: 'center',
    },

    // Header View
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 30,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 20,
    },
    logo: {
        height: 70,
        width: 191
    },

});


export default LockApp;