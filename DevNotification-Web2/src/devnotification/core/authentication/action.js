
import history from '../../../history';
import { INIT_LOGIN, AUTH_DENIED, LOGOUT, INIT_PROFILE, AUTH0_REDIRECTED } from './actionconstants'

import Auth0Lock from 'auth0-lock';
import agent from '../../util/dnagent'

const auth0Lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
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

const profileRecovered = (idToken, accessToken, profile) => {
    return {
        type: INIT_PROFILE,
        idToken,
        accessToken,
        profile
    }
}

const auth0Redirected = (idToken) => {
    return { type: AUTH0_REDIRECTED, idToken };
}


const checkAuth = (accessToken, idToken) => {

    return dispatch => {

        if (!accessToken) {
            //no token at all, first time the app is opened on this browser
            return dispatch(authenticationDenied());
        }
        return new Promise((resolve, reject) => {
            auth0Lock.getUserInfo(accessToken, function (error, profile) {
                if (error) {
                    //token expired
                    dispatch(authenticationDenied());
                    return reject();
                }
                localStorage.setItem("idToken", idToken);
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("profile", JSON.stringify(profile));
                dispatch(profileRecovered(idToken, accessToken, profile));
                history.push("/");
                agent.User.create(profile).finally(r => {
                    resolve();
                });
            });
        });

    }
}

export { checkAuth, initLogin, logout, auth0Redirected };          