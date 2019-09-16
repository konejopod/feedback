import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import MainHeader from './MainHeader';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class MainHeaderContainer extends React.Component {
  
  render() {
    return (
      <MainHeader />
    );
  }
}

MainHeaderContainer.propTypes = propTypes;

export default connection(withRouter(MainHeaderContainer));