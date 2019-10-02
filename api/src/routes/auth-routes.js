const HttpStatus = require('http-status-codes');

const controller = require('../controllers/feedback-controller');

module.exports = (app) => {

	app.post('/api/feedback', async (req, res) => {
		try {
			console.debug('Received request: [POST] /api/feedback -d', req.body);
			const feedback = await controller.create(req.body);
			return res.status(HttpStatus.CREATED).send({error: false, feedback});
		} catch (error) {
			console.error('Internal server error: \n', error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: true, error});
		}
	});
	
	app.get('/api/feedback', async (req, res) => {
		try {
			console.debug('Received request: [GET] /api/feedback');
			const list = await controller.findAll();
			return res.status(HttpStatus.OK).send({error: false, list});
		} catch (error) {
			console.error('Internal server error: \n', error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: true, error});
		}
	});
};