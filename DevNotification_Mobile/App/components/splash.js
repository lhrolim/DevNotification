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


    componentDidUpdate() {
        const { isAuthenticated } = this.props
     
        if (isAuthenticated) {
            return Actions.home();
        }

        return Actions.login();

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