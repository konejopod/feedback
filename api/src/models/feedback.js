// Imports
const mongoose = require('mongoose');

const {Schema} = mongoose;

// Feedback schema
const feedbackSchema = new Schema({
    name: String,
    description: String
});

// Register schemas
module.exports = mongoose.model('Feedback', feedbackSchema);
