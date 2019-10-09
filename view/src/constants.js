const constants = {

  APP_VERSION: '0.0.1',

  // # REDUX ACTIONS
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_LOADER: 'SET_LOADER',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

  // # ERROR CODES
  ERROR_USER_UNAUTHORIZED: 'UserUnautohrizedException',
  ERROR_USER_NOT_CONFIRMED: 'UserNotConfirmedException',

  // # FEEDBACK
  SAVE_FEEDBACK: 'SAVE_FEEDBACK',
  FEEDBACK_FIELDS: [ 
    "field1", 
    "field2", 
    "field3", 
    "field4", 
    "field5", 
  ],

};

export default constants;