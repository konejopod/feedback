import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import {  
  Typography,
} from '@material-ui/core';

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
      <Typography className={classes.label}>
        {intl.formatMessage({id:'FeedbackResult.greetings'})}
      </Typography>
      <Typography variant="h4" color="primary" className={classes.codeLabel}>
        {code}
      </Typography>
      <Typography variant="h6" className={classes.label}>
        {intl.formatMessage({id:'FeedbackResult.yourFeedback'})}
      </Typography>
      <div className={classes.result}>
        <div className={classes.labels}>
          <Typography className={classes.label}>
            {intl.formatMessage({id:'Feedback.field1'})}
          </Typography>
          <Typography className={classes.label}>
            {intl.formatMessage({id:'Feedback.field2'})}
          </Typography>
          <Typography className={classes.label}>
            {intl.formatMessage({id:'Feedback.field3'})}
          </Typography>
          <Typography className={classes.label}>
            {intl.formatMessage({id:'Feedback.field4'})}
          </Typography>
          <Typography className={classes.label}>
            {intl.formatMessage({id:'Feedback.field5'})}
          </Typography>
        </div>
        <div className={classes.values}>
          <Typography className={classes.label}>{feedback.field1}</Typography>
          <Typography className={classes.label}>{feedback.field2}</Typography>
          <Typography className={classes.label}>{feedback.field3}</Typography>
          <Typography className={classes.label}>{feedback.field4}</Typography>
          <Typography className={classes.label}>{feedback.field5}</Typography>
        </div>      
      </div>
      <Typography variant="h6" className={classes.label}>
        {intl.formatMessage({id:'FeedbackResult.summary'})}
      </Typography>
      <div className={classes.result}>
        <Typography className={classes.label}>
          *Average results...
        </Typography>
      </div>
      <div className={classes.link}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default FeedbackResult;
