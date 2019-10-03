const HttpStatus = require('http-status-codes');

const controller = require('../controllers/auth-controller');

module.exports = (app) => {

	app.post('/api/user', async (req, res) => {
		try {
			console.debug('Received request: [POST] /api/user -d', req.body);
			const user = await controller.create(req.body);
			return res.status(HttpStatus.CREATED).send({error: false, user});
		} catch (error) {
			console.error('Internal server error: \n', error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: true, error});
		}
	});
	
	app.get('/api/user', async (req, res) => {
		try {
			console.debug('Received request: [GET] /api/user');
			const list = await controller.findAll();
			return res.status(HttpStatus.OK).send({error: false, list});
		} catch (error) {
			console.error('Internal server error: \n', error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: true, error});
		}
	});
};