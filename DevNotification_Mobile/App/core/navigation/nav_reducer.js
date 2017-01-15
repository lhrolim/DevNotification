import { ActionConst } from 'react-native-router-flux';
import * as types from './nav_actionTypes';

const initialState = {
  showSpin: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case types.ShowSpin: {
      return { ...state, showSpin: true };
    }

    case types.HideSpin: {
      return { ...state, showSpin: false };
    }


    // ...other actions

    default:
      return state;

  }
}