const mongoose = require('mongoose');

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  ticket: String,
  feedbacks: [
    {
      username: String,
      field1: Number,
      field2: Number,
      field3: Number,
      field4: Number,
      field5: Number,
    },
  ], 
});

module.exports = mongoose.model('Feedback', feedbackSchema);
