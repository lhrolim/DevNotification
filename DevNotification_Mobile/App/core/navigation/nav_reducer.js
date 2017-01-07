import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
/*  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.PUSH: {
      return { ...state, scene: action.scene, sceneTransitioning:true };
    }
    case ActionConst.FOCUS: {
      return { ...state, sceneTransitioning:false };
    }
    case "FINISH_FLUX":{
       const newState = {...state};
       delete newState[sceneTransitioning];
    }

    // ...other actions

    default:*/
      return state;
  
}