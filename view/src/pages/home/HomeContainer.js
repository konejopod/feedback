import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import Home from './Home';
import constants from '../../constants';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class HomeContainer extends React.Component {
  
  handleSelectLanguage = value => {
    this.props.dispatch({ type: constants.CHANGE_LANGUAGE, language: value });
  }

  render() {
    const { intl, state } = this.props;
    return (
      <Home
        intl={intl}
        language={state.language}
        onSelectLanguage={this.handleSelectLanguage}
      />
    );
  }
}
HomeContainer.propTypes = propTypes;

export default injectIntl(connection(HomeContainer));