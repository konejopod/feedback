import axios from "axios";

import constants from '../constants';

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
          username: this.user,
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
}
