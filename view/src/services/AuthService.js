import axios from "axios";

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
    
  async authenticate(username, password) {
    const response = await axios.post('/api/auth/signIn', { username, password });
    const { session } = response.data;
    if (!session.content.emailVerified) throw new Error(constants.ERROR_USER_NOT_CONFIRMED);
    return session;
  }
  
  async signUp(username, password, email, phoneNumber) {
    const newUser = {
      username: username,
      password: password,
      email: email || username,
      phone_number: phoneNumber,
      // TODO Make emailVerified dinamic
      emailVerified: true,
    };
    const user = await axios.post('/api/auth/signUp', newUser);
    return user; 
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
