import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import styles from './MainHeader.css';
import UserMenuContainer from '../user-menu/UserMenuContainer';

const useStyles = makeStyles(styles);

const MainHeader = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            <FormattedMessage id={'App.name'} description="Title" defaultMessage="Feedback" />
          </Typography>
          <Typography>
            {user && user.username}
          </Typography>
          <UserMenuContainer />  
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
