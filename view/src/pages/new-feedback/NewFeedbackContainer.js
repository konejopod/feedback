import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import NewFeedback from './NewFeedback';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class NewFeedbackContainer extends React.Component {
  
  render() {
    const { intl } = this.props;
    return (
      <NewFeedback
        intl={intl}
      />
    );
  }
}
NewFeedbackContainer.propTypes = propTypes;

export default injectIntl(connection(NewFeedbackContainer));