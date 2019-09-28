// Imports
const mongoose = require('mongoose');

const feedbackModel = mongoose.model('Feedback');

module.exports = (app) => {

	app.get(`/api/feedback`, async (req, res) => {
		let itemList = await feedbackModel.find();
		return res.status(200).send(itemList);
	});

	app.post(`/api/feedback`, async (req, res) => {
		let item = await feedbackModel.create(req.body);
		return res.status(201).send({error: false, item});
	});

	app.put(`/api/feedback/:id`, async (req, res) => {
		const {id} = req.params;
		let item = await feedbackModel.findByIdAndUpdate(id, req.body);
		return res.status(202).send({error: false, item});
	});

	app.delete(`/api/feedback/:id`, async (req, res) => {
		const {id} = req.params;
		let item = await feedbackModel.findByIdAndDelete(id);
		return res.status(202).send({error: false, item});
	});

};