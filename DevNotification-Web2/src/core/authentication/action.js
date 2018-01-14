
import history from '../../history';
import { INIT_LOGIN, AUTH_DENIED, LOGOUT, INIT_PROFILE, AUTH0_REDIRECTED } from './actionconstants'
import Auth0 from 'auth0-lock';
import {parseHash} from 'auth0-lock';

const auth0 = new Auth0('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
    responseType: 'token' // also 'id_token' and 'code' (default)
});


const initLogin = () => {
    return {
        type: INIT_LOGIN
    }
}

const authenticationDenied = () => {
    return {
        type: AUTH_DENIED
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

const profileRecovered = (idToken, profile) => {
    return {
        type: INIT_PROFILE,
        idToken,
        profile
    }
}

const auth0Redirected = (idToken) => {
    return { type: AUTH0_REDIRECTED, idToken };
}


const checkAuth = (idToken) => {

    return dispatch => {

        if (!idToken) {
            //no token at all, first time the app is opened on this browser
            return dispatch(authenticationDenied());
        }

        return new Promise((resolve, reject) => {
            auth0.getProfile(idToken, function (error, profile) {
                if (error) {
                    //token expired
                    dispatch(authenticationDenied());
                    return reject();
                }
                dispatch(profileRecovered(idToken, profile));
                resolve();
            });
        });

    }
}

export { checkAuth, initLogin, logout, auth0Redirected };          