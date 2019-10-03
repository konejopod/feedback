const User = require('../models/user');

module.exports = {

  create: content => { 
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