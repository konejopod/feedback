const HttpStatus = require('http-status-codes');

const User = require('../models/user');

module.exports = {

  signIn: credentials => { 
    const { username, password } = credentials;
    return User.findOne({ username }).then((result, error) => {
      if (error) {
        return Promise.reject({ 
          message: error, 
          code: HttpStatus.INTERNAL_SERVER_ERROR 
        });
      }
      if (!result || result.password !== password) {
        return Promise.reject({ 
          message: 'Bad credentials', 
          code: HttpStatus.UNAUTHORIZED, 
        });
      }
      return Promise.resolve({ 
        message: 'SignIn success', 
        code: HttpStatus.CREATED,
        content: result 
      });
    });
  },
    
  signUp: content => { 
    const model = new User(content);
		return model.save().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'User created', content: result });
    });
  },

  findAll: () => {
		return User.find().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Users found', content: result });
    });
  },

  update: (id, content) => {
		return User.findByIdAndUpdate(id, content).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'User updated', content: result });
    });
  },

  delete: id => {
		return User.findByIdAndDelete(id).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'User deleted', content: result });
    });
  },
};