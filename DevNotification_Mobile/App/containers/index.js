import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {connect} from 'react-redux'

const propTypes = {
    children: PropTypes.node,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Container extends Component {
    render() {
        const {showSpin} = this.props;

        return (
            <View style={styles.container}>
                <Spinner visible={showSpin} textContent={"Loading..."} />
                {this.props.children}
            </View>
        );
    }
}

const mapsStateToProps = (state)=>{
    return {
        showSpin: state.routeState.showSpin
    }
}

Container.propTypes = propTypes;

export default connect(mapsStateToProps)(Container);
