const mongoose = require('mongoose');

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  ticket: String,
  feedbacks: [
    {
      fromColleague: String,
      toColleague: String,
      field1: Number,
      field2: Number,
      field3: Number,
      field4: Number,
      field5: Number,
    },
  ], 
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
