const Auth0Lock = require('react-native-lock');

const lock = new Auth0Lock({ clientId: "oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho", domain: "plg.auth0.com" });

const ReactNative = require('react-native');

const {  AsyncStorage, Navigator } = ReactNative;

import { AuthStorageToken } from './actions'

import { Actions } from 'react-native-router-flux';

import Navigate from "../navigation/navigationWrapper"

import store from '../root/store';

const authSubscriber = () => {
    const state = store.getState();
    const authState = state.authState;
    const routeState = state.routeState;
    if (routeState.sceneTransitioning) {
        //check navigationWrapper.js 
        return;
    }

    if (authState.showLock) {
        Navigate("login");
    }
    else if (authState.authenticated) {
        Navigate("home");
    }

    if (authState.clearStorage) {
        AsyncStorage.removeItem(AuthStorageToken).catch(err => {
            console.log(err);
        });
    } else if (authState.updateStorage) {
        var tokenToStore = { idToken: authState.idToken, refreshToken: authState.refreshToken };
        AsyncStorage.setItem(AuthStorageToken, tokenToStore).catch(err => {
            console.log(err);
        });
    }


}

export default authSubscriber;