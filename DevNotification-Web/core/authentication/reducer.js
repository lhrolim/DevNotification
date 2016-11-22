const authState = (state = {}, action) => {
    switch (action.type) {
        case "authenticationDenied":{
            return Object.assign({}, state, { authenticationDenied:true, authenticated:false });
        }
        case "initLogin":{
            return Object.assign({}, state, { showLock:true });
        }
        case "initProfile": {
            return Object.assign({}, state, { authenticated:true,idToken:action.idToken, profile: action.profile })
        }
        case "logout":{
            return  { authenticated:false,logout:true };
        }case "auth0redirected":{
            return Object.assign({}, state, { auth0Redirected:true,idToken:action.idToken })
        }

        default:
            return state;
    }
}

export default authState;