import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import restService from '../core/util/restservice'
import { checkAuth } from '../core/authentication/action'
import history from '../history';

const Home = compose(
  connect(state => {
    return {
      config: state.config,
      auth: state.authState
    }
  }),
  lifecycle({
    componentDidMount() {
      /* this.props.dispatch({
        type: 'SET_CONFIG',
        config: { layout: 'home' }
      }) */

      const idToken = localStorage.getItem('idToken');
      this.props.dispatch(checkAuth(idToken));
    },

    componentDidUpdate() {
      const { authenticated, idToken, profile,authenticationDenied } = this.props.auth;
      if (authenticated && profile) {
        // make sure to create the user at the api-side after the login suceeded
     /*    restService.putPromise(`user/${profile.user_id}`, {
          userId: profile.user_id,
          email: profile.email,
        }); */
      }
      if (authenticationDenied) {
        localStorage.removeItem("idToken");
        localStorage.removeItem("profile");
        history.push("/signin");
      }

    }




  })
)

export default Home
