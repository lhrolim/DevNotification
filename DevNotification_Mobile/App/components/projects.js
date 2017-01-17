'use strict';

import React, { Component } from 'react'
import  Container  from '../containers'
import { ActionButton, Avatar, ListItem, Toolbar } from 'react-native-material-ui'
import { View,ToastAndroid } from 'react-native'
import {Actions} from 'react-native-router-flux'

class Projects extends Component {

    render() {
        return (

            <Container>
                <Toolbar
                    key="toolbar"
                    leftElement="menu"
                    onLeftElementPress={() => Actions.drawer()}
                    centerElement="Projects"
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

export default Projects;