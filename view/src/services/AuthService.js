import axios from "axios";
// import { bcrypt } from "bcrypt";

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

  _encryptPassword(password) {
    // TODO bcrypt -> Module not found: Can't resolve 'aws-sdk' in '/app/node_modules/node-pre-gyp/lib'
    // const salt = bcrypt.genSaltSync(7);
    // return bcrypt.hashSync(password, salt);
    return password
  }

  authorize(callback) {
    // TODO To implement authorization with token
    callback(false, { 
      message: 'Not authorized.' 
    });
  }
    
  async authenticate(username, password) {

    const response = await axios.post('/api/auth/signIn', { 
      username, 
      password: this._encryptPassword(password), 
    });
    const { session } = response.data;
    if (!session.content.emailVerified) throw new Error(constants.ERROR_USER_NOT_CONFIRMED);
    return session;
  }
  
  async signUp(username, password, email, phoneNumber) {        
    const newUser = {
      username: username,
      password: this._encryptPassword(password),
      email: email || username,
      phone_number: phoneNumber,
      // TODO Make emailVerified dinamic
      emailVerified: true,
    };
    const response = await axios.post('/api/auth/signUp', newUser);
    const { user } = response.data;
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
