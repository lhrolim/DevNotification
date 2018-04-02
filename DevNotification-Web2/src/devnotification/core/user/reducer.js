const nameInitialState = {
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


import { LOAD_PROJECT_DATA } from './useractionconstants'


const user = (state = nameInitialState, action) => {
    switch (action.type) {
        case LOAD_PROJECT_DATA:
            return Object.assign(state, { projects: { data: action.projects, loaded: true } })
        default:
            return state
    }
}

export default user;