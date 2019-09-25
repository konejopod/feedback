const mongoose = require('mongoose');
const {Schema} = mongoose;

const feedbackSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('feedbacks', feedbackSchema);