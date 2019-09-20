import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import ReplyFeedback from './ReplyFeedback';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class ReplyFeedbackContainer extends React.Component {
  
  render() {
    const { intl, match } = this.props;
    return (
      <ReplyFeedback
        intl={intl}
        code={match.params.feedbackCode}
      />
    );
  }
}
ReplyFeedbackContainer.propTypes = propTypes;

export default injectIntl(connection(ReplyFeedbackContainer));