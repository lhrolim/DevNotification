/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import {init} from "../core/auth/actions"

export default class Splash extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}


    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(init());
    }

    render() {
        return (
            <View>
            </View>
        );
    }

}				
