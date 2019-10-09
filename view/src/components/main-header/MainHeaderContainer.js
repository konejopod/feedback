import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import MainHeader from './MainHeader';
import constants from '../../constants';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class MainHeaderContainer extends React.Component {

  handleItemClick = item => {
    const { history, dispatch } = this.props;
    switch (item) {
      case 'profile':
        history.push('/profile');
        break;
      case 'login':
        history.push('/login');
        break;
      case 'logout':
        dispatch({ type: constants.LOGOUT });
        break;
      default:
        break;
    }
  }
  
  render() {
    const { state } = this.props;
    return (
      <MainHeader 
        user={state.user}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

MainHeaderContainer.propTypes = propTypes;

export default connection(withRouter(MainHeaderContainer));