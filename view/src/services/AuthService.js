import constants from '../constants';

export default class AuthService {

  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  }

  _parseUser(user) {
    return {
      username: user.username,
      email: user.email,
      emailVerified: user.emailVerified,
      // photoURL: user.,
      // phoneNumber: user.,
    };
  }

  authorize(callback) {    
    if (process.env.NODE_ENV !== 'production') {
      let mockUser = require('../etc/mock-user.json')
      callback(true, { 
        content: this._parseUser(mockUser), 
        message: `Signed in user: ${mockUser.username}.` 
      });
    } else {
      // TODO Change to a real auth, ...
      callback(false, { 
        message: 'Not authorized.' 
      });
    }
  }
    
  authenticate(username, password) {
    if (process.env.NODE_ENV !== 'production') {
      let mockUser = require('../etc/mock-user.json')
      if (username === mockUser.username || username === mockUser.email) { // TODO && password === mockUser.password) {
        return this._parseUser(mockUser); 
      }
    } else {
      // TODO Change to a real auth, ...
      let mockUser = require('../etc/mock-user.json')
      if (username === mockUser.username || username === mockUser.email) { // TODO && password === mockUser.password) {
        return this._parseUser(mockUser); 
      }
    }
    throw new Error(constants.ERROR_USER_UNAUTHORIZED);
  }
  
  signUp(username, password, email, phoneNumber) {
    // TODO Change to a real sign up, ...
    const newUser = {
      username: username,
      password: password,
      email: email || username,
      phone_number: phoneNumber,
    };
    return this._parseUser(newUser); 
  }

  confirmAccount(username, code) {
    // TODO confirmAccount
  }

  sendVerification(username) {
    // TODO sendVerification
  }
  
  signOut() {
    // TODO signOut
  }
  
  resetPassword(username) {
    // TODO resetPassword
  }

  resetPasswordSubmit(username, code, newPassword) {
    // TODO resetPasswordSubmit
  }

  changePassword(oldPassword, newPassword) {
    // TODO changePassword
  }
  
  updateUserProfile(profile) {
    // TODO updateUserProfile
  }
  
  updateCurrentUserEmail(newEmail) {
    // TODO updateUserProfile
  }
}
