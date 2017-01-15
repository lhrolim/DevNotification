
const initialState = {
    authenticated: false,
    refreshToken:null,
    idToken:null,
    profile:null,
    showSpin:false,
    clearStorage:false,
    updateStorage:false
    
}


import { INIT_NO_TOKENS,REDIRECT_AUTH_DENIED,REDIRECT_NO_INPUT,REDIRECT_FROM_LOCK_SCREEN,LOGOUT } from './actionTypes'
import { ActionConst } from 'react-native-router-flux';


const authState = (state = initialState, action) => {
    switch (action.type) {

        case INIT_NO_TOKENS:{
            return {...state, showSpin:false,authenticated:false };
        }
        case REDIRECT_AUTH_DENIED:{
            return {...state, authenticated:false, clearstorage:true }
        }
        case REDIRECT_NO_INPUT:{
            return {...state, 
                authenticated:true,
                idToken: action.idToken,
                accessToken: action.accessToken , 
                refreshToken: action.refreshToken,
                profile: action.profile }
        }case REDIRECT_FROM_LOCK_SCREEN:{
            return {...state, 
                authenticated:true,
                idToken: action.idToken,
                accessToken: action.accessToken, 
                refreshToken: action.refreshToken,
                profile: action.profile, 
                updateStorage:true }
        }
        
        case LOGOUT:{
            return {...initialState,clearstorage:true,authenticated:false};
        }
        default:
            return state;
    }
}

export default authState;