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

export default class Splash extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}

	componentDidMount(){
		setTimeout(() => this.nav(), 15000);
		
	}

	nav(){
	  this.props.navigator.replace({
			 id: 'Lock'
		});
	}

	render() {
		return(<View style ={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#fff73f'}}>
			</View>);
	}
}				
