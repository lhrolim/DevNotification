import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from '../../configureStore';
import { AJAX_INIT,AJAX_END } from '../core/global/globalconstants';

const props = require("../../serverapi.json")

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
    store.dispatch({type: AJAX_END});
    return res.body;
}

const failure = error =>{
    store.dispatch({type: AJAX_END});
    return error;
}

const tokenPlugin = req => {
    const state = store.getState();
    const token = state.authState.idToken;

    if (token) {
        req.set('authorization', `Token ${token}`);
    }
    store.dispatch({type: AJAX_INIT});
}

const Api = () => {
    var env = process.env.NODE_ENV;
    //TODO: set dev and production urls somewhat better, properties file??
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
    subscribed: () => requests.get("/project/subscribed")
}

export default {
    Projects,
    /*    setToken: _token => { token = _token; }*/
};
