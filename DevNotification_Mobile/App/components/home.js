'use strict';

import Container from '../containers';

import { ActionButton, Avatar, ListItem, Toolbar } from 'react-native-material-ui'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    ToastAndroid
} from 'react-native';

import React, {
    Component,
} from 'react';

import { connect } from 'react-redux'
import { init } from '../core/auth/actions'

import { Actions } from 'react-native-router-flux';

//import store from '../actions/root/store'

class HomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            searchText: ''
        }

    }

    render() {
        return (
            <Container>
                <Toolbar
                    key="toolbar"
                    leftElement="menu"
                    onLeftElementPress={() => Actions.drawer()}
                    centerElement="Dashboard"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        onChangeText: value => this.setState({ searchText: value }),
                        onSearchClosed: () => this.setState({ searchText: '' }),
                    }}
                />

                <ActionButton
                    actions={[
                        { icon: 'email', label: 'Add Subscription' },
                    ]}
                    icon="share"
                    transition="speedDial"
                    onPress={(action) => {
                        ToastAndroid.show(action, ToastAndroid.SHORT);
                    }}
                />

            </Container>
        );
    }

}

export default HomeComponent;