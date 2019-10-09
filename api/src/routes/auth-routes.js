const HttpStatus = require('http-status-codes');

const controller = require('../controllers/auth-controller');

module.exports = (app) => {

	app.post('/api/auth/signIn', async (req, res) => {
		try {
			console.debug('Received request: [POST] /api/auth/signIn -d', req.body);
			const session = await controller.signIn(req.body);
			return res.status(HttpStatus.CREATED).send({ error: false, session });
		} catch (error) {
			console.error('Internal server error: \n', error);
			return res.status(error.code).send({ error: true, message: error.message });
		}
	});

	app.post('/api/auth/signUp', async (req, res) => {
		try {
			console.debug('Received request: [POST] /api/user -d', req.body);
			const user = await controller.signUp(req.body);
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