import history from '../../history';
import store from '../../configureStore';


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
}

export default authSubscriber;