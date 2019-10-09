const Feedback = require('../models/feedback');

module.exports = {

  create: content => { 
    const model = new Feedback(content);
		return model.save().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback created', content: result });
    });
  },

  findAll: () => {
		return Feedback.find().then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedbacks found', content: result });
    });
  },

  update: (id, content) => {
		return Feedback.findByIdAndUpdate(id, content).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback updated', content: result });
    });
  },

  delete: id => {
		return Feedback.findByIdAndDelete(id).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback deleted', content: result });
    });
  },
};