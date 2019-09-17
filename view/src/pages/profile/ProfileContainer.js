import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import Profile from './Profile';

const propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const connection = connect(
  state => ({ state }), 
  dispatch => ({ dispatch })
);

class ProfileContainer extends React.Component {
  
  render() {
    const { intl } = this.props;
    return (
      <Profile
        intl={intl}
      />
    );
  }
}
ProfileContainer.propTypes = propTypes;

export default injectIntl(connection(ProfileContainer));