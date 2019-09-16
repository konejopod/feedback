import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";

import AuthService from '../../services/AuthService';
import UserMenu from './UserMenu';
import constants from '../../constants';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const connection = connect(state => ({ state }), dispatch => ({ dispatch }));

class UserMenuContainer extends React.Component {

  constructor(props) {
    super(props);
    this.authService = AuthService.getInstance();
    this.state = {};
  }

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
    const { intl, state } = this.props;
    return (
      <UserMenu
        intl={intl}
        user={state.user}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

UserMenuContainer.propTypes = propTypes;

export default injectIntl(connection(withRouter(UserMenuContainer)));