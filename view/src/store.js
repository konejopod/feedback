import { createStore } from 'redux';

import constants from "./constants";
import { loadLocalStorage } from "./localStorage";

const defaultState = {
  user: null, 
  loading: false, 
  language: 'en-US',
  feedback: {},
};

export const redux = (state, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return { ...state, user: action.user };
    case constants.LOGOUT:
      return { ...state, user: null };
    case constants.SET_LOADER:
      return { ...state, loading: action.loading };
    case constants.CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    case constants.SAVE_FEEDBACK:
      return { ...state, feedback: action.feedback };
    default:
      return state;
  }
};

const localState = loadLocalStorage('state');
const reduxStore = (initialState) => {
  return createStore(redux, { ...defaultState, ...initialState, ...localState });
};

export default reduxStore;