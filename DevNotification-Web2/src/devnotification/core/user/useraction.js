import { LOAD_PROJECT_DATA } from './useractionconstants'
import agent from '../../util/dnagent'

const projectDataLoaded = (projects) => {
    return {
        type: LOAD_PROJECT_DATA,
        projects
    }
}

const loadProjectData = async () => {

    try{
        const projects = await agent.Projects.subscribed();
        return dispatch => {

            dispatch(projectDataLoaded(projects));
            
        }
    }catch (err){
        console.log(err);
    }
    

    
}

export { loadProjectData };
