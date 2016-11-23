//Action called whenever the login gets initialized
const INIT_LOGIN = "initLogin";
//Action to inform that the authentication of the user to a given resource has been denied
const AUTH_DENIED = "authenticationDenied";
//Action to inform that the user hit the logout button
 const LOGOUT = "logout";
//Action informing that the auth0 profile should be fetched
const INIT_PROFILE = "initProfile";
//Action informing that the auth0 authentication has been performed and the user has been redirected
const AUTH0_REDIRECTED = "auth0redirected";

export {INIT_LOGIN,AUTH_DENIED,LOGOUT,INIT_PROFILE,AUTH0_REDIRECTED}