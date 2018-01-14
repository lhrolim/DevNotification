import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {initLogin, checkAuth} from '../../core/authentication/action'
import Login from './login'
import Auth0Lock from 'auth0-lock';
import history from '../../history'

const lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
  container: 'root',
  auth: {
      responseType: 'token',
      params: {
          scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      },
  }
});


lock.on("authenticated", function(authResult) {
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
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



const StoredLayout = compose(
  connect(state => {
    return {
      auth: state.authState
    }
  }),
  lifecycle({


    componentDidMount() {
      const idToken = localStorage.getItem('idToken');
      this.props.dispatch(checkAuth(idToken));
    },

    
    componentDidUpdate(){
        const { authenticated, idToken, profile,showLock } = this.props.auth;
        if (showLock){
          setTimeout(()=>lock.show(),0);
        }else{
          history.push("/");
        }
    }
  })
)

export default StoredLayout(Login)
