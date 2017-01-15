/* @flow */
'use strict';

import { connect } from 'react-redux';

import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import { init } from "../core/auth/actions"

import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authState.authenticated,
        showLock: state.authState.showLock
    }
}

class Splash extends Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(init());
    }

    navigateToHome(){
        Actions.home();
    }

    navigateToLogin(){
        Actions.login();
    }

    componentDidUpdate(){
        const { isAuthenticated, showLock } = this.props
        if (isAuthenticated){
            return this.navigateToHome();
        }

        if (showLock){
            this.navigateToLogin();
        }

    }

    render() {

        

        return (
            <View>
               
            </View>

        );
    }

}

const connectedSplash = connect(mapStateToProps)(Splash)

export default connectedSplash;