const ReactNative = require('react-native');

const {  AsyncStorage} = ReactNative;

import { AuthStorageToken } from './actions'

import { Actions } from 'react-native-router-flux';

import store from '../root/store';

const authSubscriber = () => {
    const state = store.getState();
    const authState = state.authState;
    const routeState = state.routeState;
 
    if (authState.clearStorage) {
        AsyncStorage.removeItem(AuthStorageToken).catch(err => {
            console.log(err);
        });
    } else if (authState.updateStorage) {
        var tokenToStore = { idToken: authState.idToken, refreshToken: authState.refreshToken, accessToken: authState.accessToken };
        AsyncStorage.setItem(AuthStorageToken, JSON.stringify(tokenToStore)).catch(err => {
            console.log(err);
        });
    }


}

export default authSubscriber;