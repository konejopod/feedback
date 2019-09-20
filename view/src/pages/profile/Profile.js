import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Profile.css';

const useStyles = makeStyles(styles);

const Profile = ({ intl }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      Profile
      <br/>
      <br/>
      <Link component={RouterLink} to="/">
        Home
      </Link>
    </div>
  );
}

export default Profile;
