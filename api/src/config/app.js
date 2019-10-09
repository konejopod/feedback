// Imports
const fs = require('fs');
const dotenv = require('dotenv');

module.exports = {

	loadEnvironment: function () {
		let envConfig = null;
		if(process.env.NODE_ENV == 'local') { // LOCAL stage
			envConfig = dotenv.parse(fs.readFileSync('.env-local'));
		}
		else { // PROD stage ready
			envConfig = dotenv.parse(fs.readFileSync('.env'));
		}
		for (const k in envConfig) {
			process.env[k] = envConfig[k];
		}
	}

};
