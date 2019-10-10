const Feedback = require('../models/feedback');

const _buildSummary = feedback => {
  const parsedFeedback = {
    id: feedback._id,
    ticket: feedback.ticket,
    summary: {},
  }
  feedback.feedbacks.forEach(item => {
    const fb = item._doc;
    Object.keys(fb).forEach(key => {
      if (key !== '_id') {
        if (!parsedFeedback.summary[key]) {
          parsedFeedback.summary[key] = 0;
          parsedFeedback.summary[`${key}Count`] = 0;
        }
        parsedFeedback.summary[key] += fb[key];
        parsedFeedback.summary[`${key}Count`]++;            
      }
    });
  });
  return parsedFeedback;
};

module.exports = {

  create: content => { 
    var model = new Feedback(content);
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
  
  findOne: id => {
		return Feedback.findById(id).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      const feedback = _buildSummary(result);
      return Promise.resolve({ message: 'Feedback found', content: feedback });
    });
  },

  findOneByCode: code => {
		return Feedback.findOne({ ticket: code }).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      if (!result) return Promise.reject({ message: `Feedback code ${code} not found` });
      const feedback = _buildSummary(result);
      return Promise.resolve({ message: 'Feedback found', content: feedback });
    });
  },

  update: (id, content) => {
		return Feedback.findByIdAndUpdate(id, content).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback updated', content: result });
    });
  },

  updateByCode: (code, content) => {
    Feedback.findOne({ ticket: code }).then((existingFeedback, error) => {
      if (error) return Promise.reject({ message: error });
      var feedback;
      if (!existingFeedback) {
        console.debug('[updateByCode]', `Feedback code ${code} not found, creating a new one`);
        feedback =  new Feedback({ ticket: code, ...content });
        return feedback.save().then((result, error) => {
          if (error) return Promise.reject({ message: error });
          return Promise.resolve({ message: 'Feedback saved', content: result });
        });
      } else {
        console.debug('[updateByCode]', `Feedback code ${code} found, updating`);
        Feedback.findByIdAndUpdate(
          { _id: existingFeedback._id }, 
          { $push: { feedbacks: content.feedbacks[0] } 
        }).then((result, error) => {
          if (error) return Promise.reject({ message: error });
          return Promise.resolve({ message: 'Feedback updated', content: result });
        });
      }
    });
		// return Feedback.findByIdAndUpdate(id, content).then((result, error) => {
    //   if (error) return Promise.reject({ message: error });
    //   return Promise.resolve({ message: 'Feedback updated', content: result });
    // });
  },

  delete: id => {
		return Feedback.findByIdAndDelete(id).then((result, error) => {
      if (error) return Promise.reject({ message: error });
      return Promise.resolve({ message: 'Feedback deleted', content: result });
    });
  },
};