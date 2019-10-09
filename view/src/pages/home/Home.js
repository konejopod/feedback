import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";

import { 
  Link,
  Typography,
} from '@material-ui/core';

import styles from './Home.css';
import GiveFeedbackContainer from '../give-feedback/GiveFeedbackContainer';

const useStyles = makeStyles(styles);

const Home = ({ 

  intl,
  user,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Typography align="left">
        {intl.formatMessage({id:'Home.greetings'})}
      </Typography>
      <GiveFeedbackContainer />
      {/* <Link component={RouterLink} to = "/request-feedback">
        {intl.formatMessage({id:'Home.requestFeedback'})}
      </Link>
      <Typography>
        {!user && intl.formatMessage({id:'Auth.signInRequired'})}
      </Typography> */}
    </div>
  );
}

export default Home;
