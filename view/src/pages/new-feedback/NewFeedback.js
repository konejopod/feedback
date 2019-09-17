import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import styles from './NewFeedback.css';

const useStyles = makeStyles(styles);

const NewFeedback = ({ intl }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      New feedback
      <br/>
      <br/>
      <Link component={RouterLink} to="/">
        Home
      </Link>
    </div>
  );
}

export default NewFeedback;
