import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import styles from './FeedbackResult.css';

const useStyles = makeStyles(styles);

const FeedbackResult = ({ 

  intl,
  code,
  feedback,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      Code: {code}
      <br/>
      Field 1: {feedback.field1}
      <br/>
      Field 2: {feedback.field2}
      <br/>
      Field 3: {feedback.field3}
      <br/>
      Field 4: {feedback.field4}
      <br/>
      Field 5: {feedback.field5}
      <br/>
      <br/>
      <Link component={RouterLink} to="/">
        Home
      </Link>
    </div>
  );
}

export default FeedbackResult;
