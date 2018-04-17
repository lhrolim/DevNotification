import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from '../../configureStore';
import { AJAX_INIT, AJAX_END } from '../core/global/globalconstants';

const props = require("../../serverapi.json")

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
    store.dispatch({ type: AJAX_END });
    return res.body;
}

const failure = error => {
    store.dispatch({ type: AJAX_END });
    return error;
}

const tokenPlugin = req => {
    const state = store.getState();
    const token = state.authState.idToken;

    if (token) {
        req.set('authorization', `Bearer ${token}`);
    }
    store.dispatch({ type: AJAX_INIT });
}

const Api = () => {
    var env = process.env.NODE_ENV;
    if (!!sessionStorage.mockserver){
        return "http://localhost:3004/"
    }
    return env === "development" ? props.dev : props.prod;
}

const requests = {
    del: url =>
        superagent.del(`${Api()}${url}`).use(tokenPlugin).then(responseBody).catch(failure),
    get: url =>
        superagent.get(`${Api()}${url}`).use(tokenPlugin).then(responseBody).catch(failure),
    put: (url, body) =>
        superagent.put(`${Api()}${url}`, body).use(tokenPlugin).then(responseBody).catch(failure),
    post: (url, body) =>
        superagent.post(`${Api()}${url}`, body).use(tokenPlugin).then(responseBody).catch(failure)
};

const Projects = {
    subscribed: async () => requests.get("project/subscribed")
}

const User = {
    create: async (auth0Profile) => requests.put(`user/${auth0Profile.user_id}`, { userId: auth0Profile.user_id, email: auth0Profile.email })
}

export default {
    Projects,
    User
    /*    setToken: _token => { token = _token; }*/
};
