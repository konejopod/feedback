import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import FeedbackResult from './FeedbackResult';
import FeedbackService from '../../services/FeedbackService';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class FeedbackResultContainer extends React.Component {

  constructor(props) {
    super(props);
    // TODO Validate session
    this.feedbackService = FeedbackService.getInstance(props.state.user);
    this.state = {
      code: props.match.params.feedbackCode,
      feedback: {},
      message: {},
    }
  }
  
  componentDidMount() {
    this._fetchFeedback();
  }
  
  async _fetchFeedback() {
    const { match } = this.props;
    try {
      const feedback = await this.feedbackService.getFeedbackByCode(match.params.feedbackCode);
      this.setState({ feedback });
    } catch (error) {
      console.error(error);
    }
  }
    
  render() {
    const { intl, state } = this.props;
    console.debug('result', state)
    return (
      <FeedbackResult
        intl={intl}
        feedback={this.state.feedback}
        myFeedback={state.feedback}
      />
    );
  }
}
FeedbackResultContainer.propTypes = propTypes;

export default injectIntl(connection(FeedbackResultContainer));