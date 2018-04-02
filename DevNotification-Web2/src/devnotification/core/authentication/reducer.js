import { INIT_LOGIN, AUTH_DENIED, LOGOUT, INIT_PROFILE, AUTH0_REDIRECTED } from './actionconstants'

const initialState = {
    authenticated: false,
}

const authState = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_DENIED: {
            return Object.assign({}, state, { authenticationDenied: true, authenticated: false, showLock: true });
        }
        case INIT_LOGIN: {
            return {...state, showLock: true };
        }
        case INIT_PROFILE: {
            return Object.assign({}, state, { authenticationDenied: false, authenticated: true, showLock:false, idToken: action.idToken, profile: action.profile })
        }
        case LOGOUT: {
            return { authenticated: false, logout: true };
        } case AUTH0_REDIRECTED: {
            return Object.assign({}, state, { auth0Redirected: true, idToken: action.idToken })
        }

        default:
            return state;
    }
}

export default authState;