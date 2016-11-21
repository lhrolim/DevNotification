const authState = (state = {}, action) => {
    switch (action.type) {
        case "redirectLogin":{
            return Object.assign({}, state, { authenticated:false });
        }
        case "initLogin":{
            return Object.assign({}, state, { showLock:true });
        }
        case "initProfile": {
            return Object.assign({}, state, { authenticated:true,idToken:action.idToken, profile: action.profile })
        }
        case "logout":{
            return  { authenticated:false,logout:true };
        }

        default:
            return state;
    }
}

export default authState;