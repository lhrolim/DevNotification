import * as types from './actionTypes';

var React = require('react');
var ReactNative = require('react-native');
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

const gatherProfile = (dispatch,idToken, refreshToken, allowRefresh) => {

  return new Promise((resolve, reject) => {
    lock.authenticationAPI().userInfo(idToken)
      .then(profile => {
        dispatch(authSuceeded(refreshToken, idToken, profile));
        resolve();
      }).catch(error => {
        if (!allowRefresh) {
          //idtoken has just been refreshed
           return reject();
        }
        lock.authenticationAPI()
          .refreshToken(refreshToken)
          .then(response => {
            let returnedIdToken = response.idToken;
            return gatherProfile(dispatch,refreshToken, returnedIdToken, false);
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

    const value = AsyncStorage.getItem(AuthStorageToken).then(valueST => {
      if (valueST !== null) {
        const value = JSON.parse(valueST);
        const idToken = value.idToken;
        const refreshToken = value.refreshToken;
        return gatherProfile(dispatch,idToken, refreshToken, true);
      }
      return dispatch(initNoTokens());
    }).catch(error => { console.log(error) });
  }
}

const redirectFromLockScreen = (refreshToken, idToken, profile) => {
  return {
    type: types.REDIRECT_FROM_LOCK_SCREEN,
    idToken,
    refreshToken,
    profile
  }
}


export { init, initNoTokens, authSuceeded, authDenied, redirectFromLockScreen }
