
import history from '../../history';
import { INIT_LOGIN, AUTH_DENIED, LOGOUT, INIT_PROFILE, AUTH0_REDIRECTED } from './actionconstants'

import Auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';

const auth0Lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
    responseType: 'token' // also 'id_token' and 'code' (default)
});

const auth0JS = new auth0.WebAuth({
    domain: "plg.auth0.com",
    clientID: "oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho"
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


const checkAuth = (idToken, tokenHash) => {

    return dispatch => {

        if (!idToken && !tokenHash) {
            //no token at all, first time the app is opened on this browser
            return dispatch(authenticationDenied());
        }
        return new Promise((resolve, reject) => {

            const verifyProfile = (idToken, resolve, reject) => {
                auth0Lock.getProfile(idToken, function (error, profile) {
                    if (error) {
                        //token expired
                        dispatch(authenticationDenied());
                        return reject();
                    }
                    dispatch(profileRecovered(idToken, profile));
                    resolve();
                });
            }

            if (tokenHash !== "") {
                //this is needed cause auth0 redirects the user to that same component without any callback rather just the hash on the screen, 
                // hence we cannot rely on redux at this point
                const hash = auth0JS.parseHash(tokenHash, (err, token) => {
                    if (err) {
                        //testing against a fake hash
                        dispatch(authenticationDenied());
                        return reject();
                    }
                    return resolve();
                    // verifyProfile(token.idToken,resolve,reject);
                });
            }
            else if (idToken) {
                verifyProfile(idToken,resolve,reject);
            }
        });

    }
}

export { checkAuth, initLogin, logout, auth0Redirected };          