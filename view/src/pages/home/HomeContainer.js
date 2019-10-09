import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import Home from './Home';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class HomeContainer extends React.Component {

  render() {
    const { intl, state } = this.props;
    return (
      <Home 
        intl={intl}
        user={state.user}
      />
    );
  }
}
HomeContainer.propTypes = propTypes;

export default injectIntl(connection(HomeContainer));