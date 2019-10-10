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
  feedback,
  myFeedback,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Typography className={classes.label}>
        {intl.formatMessage({id:'FeedbackResult.greetings'})}
      </Typography>
      <Typography variant="h4" color="primary" className={classes.codeLabel}>
        {feedback.ticket}
      </Typography>
      {
        myFeedback.code && <React.Fragment>
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
              <Typography className={classes.label}>{myFeedback.field1}</Typography>
              <Typography className={classes.label}>{myFeedback.field2}</Typography>
              <Typography className={classes.label}>{myFeedback.field3}</Typography>
              <Typography className={classes.label}>{myFeedback.field4}</Typography>
              <Typography className={classes.label}>{myFeedback.field5}</Typography>
            </div>      
          </div>
        </React.Fragment>
      }
      {
        feedback.summary && <React.Fragment>
          <Typography variant="h6" className={classes.label}>
            {intl.formatMessage({id:'FeedbackResult.summary'})}
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
              <Typography className={classes.label}>
                {feedback.summary.field1Count ? feedback.summary.field1 / feedback.summary.field1Count : 0}
              </Typography>
              <Typography className={classes.label}>
                {feedback.summary.field2Count ? feedback.summary.field2 / feedback.summary.field2Count : 0}
              </Typography>
              <Typography className={classes.label}>
                {feedback.summary.field3Count ? feedback.summary.field3 / feedback.summary.field3Count : 0}
              </Typography>
              <Typography className={classes.label}>
                {feedback.summary.field4Count ? feedback.summary.field4 / feedback.summary.field4Count : 0}
              </Typography>
              <Typography className={classes.label}>
                {feedback.summary.field5Count ? feedback.summary.field5 / feedback.summary.field5Count : 0}
              </Typography>
            </div>
          </div>
        </React.Fragment>
      }
      <div className={classes.link}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default FeedbackResult;
