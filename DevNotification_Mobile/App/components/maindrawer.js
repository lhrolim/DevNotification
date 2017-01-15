'use strict';

import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { Actions } from 'react-native-router-flux';

import { Avatar, Drawer, Toolbar } from 'react-native-material-ui';

import { logout } from "../core/auth/actions"

import {connect} from 'react-redux'

import Container from '../containers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 260,
        elevation: 4,
        backgroundColor: 'white'
    }
});


class MainDrawer extends Component {

    componentDidUpdate() {
        const { authenticated } = this.props
        
        if (!authenticated) {
            return Actions.login();
        }

    }

    render() {

        const {dispatch} = this.props;

        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => Actions.pop()}
                    centerElement={'Test'}
                />
                <View style={styles.container}>
                    <Drawer>
                        <Drawer.Section
                            divider
                            items={[
                                { icon: 'home', value: 'Home' },
                                { icon: 'loyalty', value: 'My Projects' },
                                { icon: 'polymer', value: 'My Apps' }
                            ]}
                        />

                        <Drawer.Section
                            title="Personal"
                            items={[
                                { icon: 'settings', value: 'Settings' },
                                { icon: 'info', value: 'About' },
                                { icon: 'exit-to-app', value: 'Logout', onPress: () => dispatch(logout()) }
                            ]}
                        />
                    </Drawer>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
    return {authenticated: state.authState.authenticated}
}

export default connect(mapStateToProps)(MainDrawer);