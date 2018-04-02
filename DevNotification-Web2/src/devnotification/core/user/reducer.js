import { LOAD_PROJECT_DATA } from './useractionconstants'
import { INIT_PROFILE } from '../authentication/actionconstants'

const nameInitialState = {

    authProfile:{},

    projects: {
        loaded: false
    },
    videos: {
        loaded: false
    },
    applications: {
        loaded: false
    }
}

const user = (state = nameInitialState, action) => {
    switch (action.type) {
        case INIT_PROFILE:{
            return Object.assign({}, state, { authProfile: action.profile })
        }

        case LOAD_PROJECT_DATA:
            return Object.assign(state, { projects: { data: action.projects, loaded: true } })
        default:
            return state
    }
}

export default user;