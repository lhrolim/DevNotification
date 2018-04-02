import { LOAD_PROJECT_DATA } from './useractionconstants'
import restService from '../../util/restservice'

const projectDataLoaded = (projects) => {
    return {
        type: LOAD_PROJECT_DATA,
        projects
    }
}

const loadProjectData = async () => {

    const projects = await restService.getPromise("/Project/Subscribed");

    return dispatch => {

        dispatch(projectDataLoaded(projects));
        
    }
}

export { loadProjectData };
