import axios from "axios";

export default class FeedbackService {

  static getInstance(user) {
    if (!this.instance) {
      this.instance = new FeedbackService();
    }
    this.user = user;
    return this.instance;
  }

  _parseFeedback(feedback) {
    return {
      ticket: feedback.code,
      feedbacks: [
        {
          fromColleague: feedback.fromColleague,
          toColleague: feedback.toColleague,
          field1: feedback.field1,
          field2: feedback.field2,
          field3: feedback.field3,
          field4: feedback.field4,
          field5: feedback.field5,
        },
      ],
    }
  }

  async giveFeedback(feedback) {
    const parsedFeedback = this._parseFeedback(feedback);
    const response = await axios.post('/api/feedback', parsedFeedback);
    return response.data;
  } 

  async giveFeedbackByCode(code, feedback) {
    const parsedFeedback = this._parseFeedback(feedback);
    const response = await axios.put(`/api/feedback/code/${code}`, parsedFeedback);
    return response.data;
  } 

  async getFeedbackById(feedbackId) {
    const response = await axios.get(`/api/feedback/${feedbackId}`);
    return response.data;
  }  

  async getFeedbackByCode(feedbackCode) {
    const response = await axios.get(`/api/feedback/code/${feedbackCode}`);
    return response.data.feedback.content;
  }  
}
