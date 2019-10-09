import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import FeedbackResult from './FeedbackResult';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class FeedbackResultContainer extends React.Component {
  
  render() {
    const { intl, state, match } = this.props;
    return (
      <FeedbackResult
        intl={intl}
        code={match.params.feedbackCode}
        feedback={state.feedback}
      />
    );
  }
}
FeedbackResultContainer.propTypes = propTypes;

export default injectIntl(connection(FeedbackResultContainer));