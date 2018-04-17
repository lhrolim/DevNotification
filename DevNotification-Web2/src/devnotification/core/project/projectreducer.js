const projectInitialState = {
    detailexpanded: false
}

const projects = (state = projectInitialState, action) => {

    switch (action.type) {
        case "SHOW_PROJECT_DETAIL":
            return { ...state, detailexpanded: true }
        case "COLLAPSE_DETAIL":
            return { ...state, detailexpanded: false }
        default:
            return state
    }
}

export default projects;