'use strict';

const props = require("../../server.json")

import store from './store'

class RestService {

    getPromise(endpoint) {

        //TODO: set dev and production urls somewhat better, properties file??
        const url = __DEV__ ? props.dev : props.prod;
        //'https://localhost:8070/api/Project/Subscribed

        const state = store.getState();
        const token = state.authState.idToken;

        return fetch(`${url}/${endpoint}`, {
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + token }
        });

    }
}

export default RestService;

