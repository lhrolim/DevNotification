import { LOAD_PROJECT_DATA } from './useractionconstants'
import restService from '../../util/restservice'

const projectDataLoaded = (projects) => {
    return {
        type: LOAD_PROJECT_DATA,
        projects
    }
}

const loadData = async () => {

    return dispatch => {

        const projects = await restService.getPromise("/Project/Subscribed");
        dispatch(projectDataLoaded(projects));
    }
}

export { loadData };
