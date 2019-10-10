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
      Roadmap:
      <ul>
        <li>Given and received feedbacks</li>
        <li>Graph showing user progress in time</li>
        <li>??</li>
        <li>??</li>
      </ul>      
      <br/>
      <br/>
      <Link component={RouterLink} to="/">
        Home
      </Link>
    </div>
  );
}

export default Profile;
