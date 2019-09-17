import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import styles from './ReplyFeedback.css';

const useStyles = makeStyles(styles);

const ReplyFeedback = ({ 

  intl, 
  code,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      Code: {code}
      <br/>
      <br/>
      <Link component={RouterLink} to="/">
        Home
      </Link>
    </div>
  );
}

export default ReplyFeedback;
