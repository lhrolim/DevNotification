'use strict';

import Container from '../containers';

import { ActionButton, Avatar,  Toolbar } from 'react-native-material-ui'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    ToastAndroid,
    FlatList
} from 'react-native';

import { List, ListItem } from 'react-native-elements'

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
            searchText: '',
        }

          this.list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },

        ]

    }

    showDrawer() {
        Actions.drawer();
    }

    render() {
        return (
            <Container>
                <Toolbar
                    key="toolbar"
                    leftElement="menu"
                    onLeftElementPress={() => this.showDrawer()}
                    centerElement="Dashboard"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        onChangeText: value => this.setState({ searchText: value }),
                        onSearchClosed: () => this.setState({ searchText: '' }),
                    }}
                />

                <List containerStyle={{ marginBottom: 30 }}>
                    
                    {
                        this.list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{ uri: l.avatar_url }}
                                key={i}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                </List>


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