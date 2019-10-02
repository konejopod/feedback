const mongoose = require('mongoose');

const Feedback = require('../models/feedback');

module.exports = {

  create: feedback => { 
    const model = new Feedback(feedback);
		return model.save().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback created', content: result });
    });
  },

  findAll: () => {
		return Feedback.find().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedbacks find', content: result });
    });
  }
};