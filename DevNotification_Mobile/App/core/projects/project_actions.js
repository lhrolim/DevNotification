import * as types from './project_actiontypes'
import RestService from '../root/restService'

const SubscribedProjectsCbk = (projects) => {
    return {
        type: types.CBK_SUBSCRIBED_PROJECTS,
        projects
    }
}

const fetchMine = () => {

    if (__DEV__) {

        return dispatch => {
            const restService = new RestService();

            return restService.getPromise("/Project/Subscribed").catch((error) => {
                    console.error(error);
                }).then((response) => response.json())
                .then((responseJson) => {
                    dispatch(SubscribedProjectsCbk())
                });

        }
    }

}