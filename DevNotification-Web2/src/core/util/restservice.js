'use strict';

const props = require("../../serverapi.json")

import store from '../store'

class RestService {

    doPromise(method, endpoint, body = null) {

        var env = process.env.NODE_ENV;

        //TODO: set dev and production urls somewhat better, properties file??
        let url = env === "development" ? props.dev : props.prod;
        //'https://localhost:8070/api/Project/Subscribed
        if (!url.endsWith("/")) {
            url = url + "/";
        }

        let parsedEndPoint = endpoint;

        if (endpoint.startsWith("/")) {
            parsedEndPoint = endpoint.substring(1);
        }

        const state = store.getState();
        const token = state.authState.idToken;
        const headers = { 'Authorization': 'Bearer ' + token };

        if (!!body) {
            headers['Content-Type'] = 'application/json';
            if (!(body instanceof String)) {
                body = JSON.stringify(body);
            }
        }



        if (!body) {
            return fetch(`${url}${parsedEndPoint}`, {
                method,
                headers
            });
        }

        return fetch(`${url}${parsedEndPoint}`, {
            method,
            headers,
            body
        });

    }


    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    getPromise(endpoint) {
        return this.doPromise("GET", endpoint)
        .then(this.checkStatus)
        .then(r=> r.json());
    }

    putPromise(endpoint, body) {
        return this.doPromise("PUT", endpoint, body);
    }



}

export default new RestService();

