import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { withStyles } from '@material-ui/core';

import styles from './App.css';
import Loader from './components/Loader';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class App extends React.Component {

  render() {
    const { classes, children, state } = this.props;
    return (
      <div className={classes.app}>
        {children}
        <Loader loading={state.loading} />
      </div>
    );
  }
}
App.propTypes = propTypes;

export default injectIntl(withStyles(styles)(connection(withRouter(App))));