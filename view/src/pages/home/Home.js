import React from 'react';
import { makeStyles } from '@material-ui/core';

import styles from './Home.css';

const useStyles = makeStyles(styles);

const Home = ({ intl }) => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      {intl.formatMessage({id:'Home.greetings'})}
    </div>
  );
}

export default Home;
