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

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      message: {},
    }
  }

  handleChange = event => {
    console.debug(event)
    this.setState({ 
      ...this.state, 
      [event.target.id]: event.target.value, 
      message: {},
    });
  }

  handleConfirm = event => {
    event.preventDefault();
    const { intl, history } = this.props;
    if (!this.state.code) {
      this.setState({ 
        ...this.state, 
        message: { 
          error: true,
          fieldErrors: [ 'code' ],
          text: intl.formatMessage({id:'Home.codeRequiredMsg'}),
        }
      });
      return;
    }
    history.push(`/reply-feedback/${this.state.code}`);
  }
  
  render() {
    const { intl, state } = this.props;
    return (
      <Home
        intl={intl}
        code={this.state.code}
        user={state.user}
        message={this.state.message}
        onChange={this.handleChange}
        onConfirm={this.handleConfirm}
      />
    );
  }
}
HomeContainer.propTypes = propTypes;

export default injectIntl(connection(HomeContainer));