


import history from '../../history';
import store from '../../configureStore';
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
    container: 'root',
    auth: {
        redirectUrl: 'http://localhost:3000/loginredirectcbk',
        responseType: 'token',
        params: {
            scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        },
    }
});



const authSubscriber = () => {
    const state = store.getState();
    const authState = state.authState;

    if (authState.auth0Redirected) {
        localStorage.setItem("idToken", authState.idToken);
        history.push("/");
    }

    if (authState.logout || authState.authenticationDenied) {
        //either the user clicked logout, or the token has expired
        localStorage.removeItem("idToken");
        localStorage.removeItem("profile");
        history.push("/signin");
    }

    if (authState.authenticated) {
        localStorage.setItem("idToken", authState.idToken);
        localStorage.setItem("profile", JSON.stringify(authState.profile));
        history.push("/");
    }

    if (authState.showLock) {
        lock.show();
    }
}

export default authSubscriber;