//this action should be triggered whenever no refresh token is found 
//and hence we need to redirect the user to the main lock screen aksing for his credentials
export const INIT_NO_TOKENS = "AUTH:INIT_NO_TOKENS";

export const REDIRECT_AUTH_DENIED = "AUTH:REDIRECT_TOKEN_DENIED";

//user got redirected with an id_token that was gathered behind the scenes
export const REDIRECT_NO_INPUT = "AUTH:REDIRECT_NO_INPUT";


export const REDIRECT_FROM_LOCK_SCREEN = "AUTH:REDIRECT_FROM_LOCK_SCREEN";


export const LOGOUT = "AUTH:LOGOUT"

