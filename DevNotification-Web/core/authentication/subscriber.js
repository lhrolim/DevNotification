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

import history from '../history';
import store from '../store';

const authSubscriber = () => {
    const state = store.getState();
    const authState = state.authState;
    
    if (authState.logout || !authState.authenticated){
        localStorage.removeItem("idToken");
        localStorage.removeItem("profile");
        history.push("/signin");
    }
    if (authState.authenticated) {
        localStorage.setItem("idToken", authState.idToken);
        localStorage.setItem("profile", JSON.stringify(authState.profile));
        history.push("/");
    } 

    if (authState.showLock){
        lock.show();
    }
}

export default authSubscriber;