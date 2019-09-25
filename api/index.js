const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Feedback');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/feedback`, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/feedbackRoutes')(app);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});