import { createStore } from 'redux';

import constants from "./constants";

const defaultState = {
  user: null, 
  loading: false, 
  language: 'en-US',
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
    default:
      return state;
  }
};

const reduxStore = (initialState) => createStore(redux, { ...defaultState, ...initialState });
export default reduxStore;