import {AJAX_INIT,AJAX_END} from './globalconstants';

const nameInitialState = {
    loading: false
}



const global = (state = nameInitialState, action) => {
    switch (action.type) {
        case AJAX_INIT:
            return {...state, loading:true}
        case AJAX_END:
        return {...state, loading:false}
        default:
            return state
    }
}

export default global;