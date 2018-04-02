import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { initLogin, checkAuth, logout } from '../../devnotification/core/authentication/action'
import Login from './login'
import Auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';
import history from '../../history'
import { parseHash } from 'auth0-lock';

/* const auth0 = new auth0.WebAuth({
  domain: 'plg.auth0.com',
  clientID: 'oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho',
  responseType: 'token' // also 'id_token' and 'code' (default)
});
 */
const lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
  container: 'root',
  auth: {
    responseType: 'token',
    params: {
      scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
    },
  }
});




lock.on("authenticated", function (authResult) {
  lock.getUserInfo(authResult.accessToken, function (error, profile) {
    if (error) {
      // Handle error
      return;
    }

    // Save token and profile locally
    localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("idToken", authResult.idToken);
    history.push("/loginredirectcbk");

    // Update DOM
  });
});

// lock.on("hash_parsed", (authParsed)=>{
//   console.log(authParsed);
// })



const StoredLayout = compose(
  connect(state => {
    return {
      auth: state.authState
    }
  }),
  lifecycle({


    componentDidMount() {
      const idToken = localStorage.getItem('idToken');
      this.props.dispatch(checkAuth(idToken, this.props.location.hash));
    },


    componentDidUpdate() {
      const { authenticated, idToken, profile, showLock, logout } = this.props.auth;
      if (logout) {
        //if a logout was requested --> show the lock window
        setTimeout(() => lock.show(), 0);
        //cleaning up location.hash of the component, just in case...
        this.props.location.hash = "";
        return;
      }
      if (showLock) {
        //timeout to avoid a react warning
        setTimeout(() => lock.show(), 0);
      } else {
        //if the user tries to hit signin but he´s already authenticated
        history.push("/");
      }
    }
  })
)

export default StoredLayout(Login)
