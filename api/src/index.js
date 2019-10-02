// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const appConfig = require('./config/app');

// Load configurations
appConfig.loadEnvironment();

// Connect to mongodb
console.debug('\n: Connecting to mongoDB: ' + process.env.MONGODB_URI + '\n');
mongoose.connect(process.env.MONGODB_URI, {
		auth: {authSource: 'admin'},
   	user: process.env.MONGO_INITDB_ROOT_USERNAME,
		pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
		useNewUrlParser: true,
		useUnifiedTopology: true		
	})
	.catch(error => {
		console.error('\nmongoDB connection error: \nMONGODB_URI: ' + process.env.MONGODB_URI + '\n' + error);
		process.exit(1);
	}
);

// Init app instance
const app = express();
app.use(express.json());

// Import API routes 
require('./routes/feedback-routes')(app);

// Start app instance
const appPort = process.env.PORT || 5100;
app.listen(appPort, () => {
	console.log('Feedback API running on port: ' + appPort);
});
