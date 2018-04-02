import React from 'react'
import Auth0Lock from 'auth0-lock';
import auth0 from 'auth0-js';
import history from '../../history'
import { checkAuth,logout } from '../../devnotification/core/authentication/action'
import { connect } from 'react-redux'
import { parseHash } from 'auth0-lock';

class Login extends React.Component {

    constructor() {
        super();
        this.auth0JS = new auth0.WebAuth({
            domain: 'plg.auth0.com',
            clientID: 'oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho',
            responseType: 'token' // also 'id_token' and 'code' (default)
        });

        this.lock = new Auth0Lock('oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho', 'plg.auth0.com', {
            container: 'root',
            auth: {
                responseType: 'token',
                params: {
                    scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
                },
            }
        });
        
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('accessToken');
        const idToken = localStorage.getItem('idToken');
        const hash = this.props.location.hash;
        /* const that = this;*/

       /*  this.lock.on("authenticated", function (authResult) {
            that.props.dispatch(checkAuth(authResult.accessToken, authResult.idToken));
            history.push("/");
        }); */

        if (accessToken && idToken) {
            this.props.dispatch(checkAuth(accessToken,idToken));
        } else if (hash && hash !== "") {

            this.auth0JS.parseHash(hash, (err, authResult) => {
                if (err) {
                    this.props.dispatch(logout());
                }
                if (authResult && authResult.idToken) {
                    this.props.dispatch(checkAuth(authResult.accessToken, authResult.idToken));
                    // history.push("/");
                }
            });
        }else if (!this.props.auth.authenticated){
            setTimeout(() => this.lock.show(), 0);
        }
    }


    componentDidUpdate() {
        const { authenticated, idToken, profile, showLock, logout } = this.props.auth;
        if (logout || showLock) {
            //if a logout was requested --> show the lock window
            setTimeout(() => this.lock.show(), 0);
            //cleaning up location.hash of the component, just in case...
            this.props.location.hash = "";
            localStorage.removeItem("idToken");
            localStorage.removeItem("profile");
            localStorage.removeItem("accessToken");
        } else if (authenticated){
            //if the user tries to hit signin but he´s already authenticated
            history.push("/");
        }
    }


    render() {
        return (
            <div id="root"></div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.authState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkAuth: (accessToken,) => {
            dispatch(checkAuth)
        }
    }
}

export default connect(mapStateToProps)(Login);