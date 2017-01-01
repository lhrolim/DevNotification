import {Actions} from 'react-native-router-flux';
import store from '../root/store';

export default navigate = (action) => {
    const routeState = store.getState().routeState;
    //prevents the subscriber function to get invoked due to a scene transitioning for the RNRF
    routeState.sceneTransitioning = true;
    Actions[action]();
    routeState.sceneTransitioning = false;
}