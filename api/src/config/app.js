// Imports
const fs = require('fs');
const dotenv = require('dotenv');

module.exports = {

	loadEnvironment: function () {
		const nodeEnv = process.env.NODE_ENV || 'prod';
		const envConfig = dotenv.parse(fs.readFileSync('.env-' + nodeEnv));
		for (const k in envConfig) {
			process.env[k] = envConfig[k];
		}
	}

};
