const mongoose = require('mongoose');
const Feedback = mongoose.model('feedbacks');

module.exports = (app) => {

  app.get(`/api/feedback`, async (req, res) => {
    let feedbacks = await Feedback.find();
    return res.status(200).send(feedbacks);
  });

  app.post(`/api/feedback`, async (req, res) => {
    let feedback = await Feedback.create(req.body);
    return res.status(201).send({
      error: false,
      feedback
    })
  })

  app.put(`/api/feedback/:id`, async (req, res) => {
    const {id} = req.params;

    let feedback = await Feedback.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      feedback
    })

  });

  app.delete(`/api/feedback/:id`, async (req, res) => {
    const {id} = req.params;

    let feedback = await Feedback.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      feedback
    })

  })

}