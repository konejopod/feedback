import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core';

import styles from './App.css';
import Loader from './components/Loader';
import AuthService from './services/AuthService';
import constants from './constants';
import MainHeaderContainer from './components/main-header/MainHeaderContainer';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    AuthService.getInstance().authorize(async (success, response) => {
      if (success) {
        dispatch({ type: constants.LOGIN, user: response.content });
        if (!response.content.emailVerified) this.props.history.push('/login');
      } else {
        dispatch({ type: constants.LOGOUT });
      }
    });
  }

  render() {
    const { classes, children, state } = this.props;
    return (
      <div className={classes.app}>
        <MainHeaderContainer />
        <div className={classes.content}>
          {children}
        </div>
        <Loader loading={state.loading} />
      </div>
    );
  }
}
App.propTypes = propTypes;

export default injectIntl(withStyles(styles)(connection(withRouter(App))));