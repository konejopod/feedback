import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';
import { withRouter } from "react-router-dom";

import GiveFeedback from './GiveFeedback';
import constants from '../../constants';
import FeedbackService from '../../services/FeedbackService';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch }),
);

class GiveFeedbackContainer extends React.Component {

  constructor(props) {
    super(props);
    // TODO Validate session
    this.feedbackService = FeedbackService.getInstance(props.state.user);
    this.state = {
      code: props.match.params.feedbackCode,
      total: 0,
      message: {},
    }
  }
  
  _validateForm = () => {
    if (!this.state.code) {
      this.setState({ 
        ...this.state, 
        message: { 
          error: true,
          fieldErrors: [ 'code' ],
          text: this.props.intl.formatMessage({id:'GiveFeedback.codeRequiredMsg'}),
        }
      });
      return false;
    }
    return true;
  }

  handleChange = (id, value) => {
    var total = 0;
    constants.FEEDBACK_FIELDS.forEach(field => {
      total += field === id ? value : this.state[field] || 0;
    });
    if (total > 5) return;
    this.setState({ 
      ...this.state, 
      total,
      [id]: value, 
      message: {},
    });
  }

  handleConfirm = event => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    if (!this._validateForm()) return;
    const feedback = {
      code: this.state.code,
      field1: this.state.field1 || 0,
      field2: this.state.field2 || 0,
      field3: this.state.field3 || 0,
      field4: this.state.field4 || 0,
      field5: this.state.field5 || 0,
    }
    dispatch({ type: constants.SAVE_FEEDBACK, feedback });
    this.feedbackService.giveFeedback(feedback);
    history.push(`/feedback-result/${this.state.code}`);
  }
  
  render() {
    const { intl } = this.props;
    return (
      <GiveFeedback
        intl={intl}
        feedback={this.state}
        message={this.state.message}
        onChange={this.handleChange}
        onConfirm={this.handleConfirm}
      />
    );
  }
}
GiveFeedbackContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(GiveFeedbackContainer)));