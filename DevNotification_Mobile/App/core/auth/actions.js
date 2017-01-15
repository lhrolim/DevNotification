import * as types from './actionTypes';
import {showSpinner, hideSpinner} from '../navigation/nav_actions'


import React from 'react';
import ReactNative from 'react-native';

var Auth0Lock = require('react-native-lock');

export const lock = new Auth0Lock({ clientId: "oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho", domain: "plg.auth0.com" });

export const AuthStorageToken = "@auth:tokens";

var { AsyncStorage } = ReactNative;


const initNoTokens = () => {
  return {
    type: types.INIT_NO_TOKENS
  };
}

const authSuceeded = (refreshToken, idToken, profile) => {
  return {
    type: types.REDIRECT_NO_INPUT,
    idToken,
    refreshToken,
    profile
  }
}

const authDenied = () => {
  return {
    type: types.REDIRECT_AUTH_DENIED
  }
}

const gatherProfile = (dispatch, refreshToken, accessToken, idToken, allowRefresh) => {


  return new Promise((resolve, reject) => {
    lock.authenticationAPI().userInfo(accessToken)
      .then(profile => {
        dispatch(authSuceeded(refreshToken, accessToken, idToken, profile));
        resolve();
      }).catch(error => {
        if (!allowRefresh) {
          //actionToken has just been refreshed
          return reject();
        }
        lock.authenticationAPI()
          .refreshToken(refreshToken)
          .then(response => {
            let returnedAccessToken = response.accessToken;
            let returnedIdToken = response.idToken;
            return gatherProfile(dispatch, refreshToken, returnedAccessToken, returnedIdToken, false);
          })
          .catch(error => {
            //refresh token is invalid... it might have been revoked
            dispatch(authDenied());
            reject();
          });
      })

  })
};



const init = () => {

  return dispatch => {

    dispatch(showSpinner());
    const value = AsyncStorage.getItem(AuthStorageToken)
      .then(valueST => {
        if (valueST !== null) {
          const value = JSON.parse(valueST);
          const idToken = value.idToken;
          const refreshToken = value.refreshToken;
          const accessToken = value.accessToken;
          return gatherProfile(dispatch, refreshToken, accessToken, idToken, true);
        }
        return dispatch(initNoTokens());
      })
      .catch(error => { console.log(error) })
      .finally(()=>dispatch(hideSpinner()));
  }
}

const redirectFromLockScreen = (refreshToken, accessToken, idToken, profile) => {
  return {
    type: types.REDIRECT_FROM_LOCK_SCREEN,
    idToken,
    refreshToken,
    accessToken,
    profile
  }
}

const logout = () => {
  return { type: types.LOGOUT }
}


export { init, initNoTokens, logout, authSuceeded, authDenied, redirectFromLockScreen }
