import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

import { 
  AccountCircleOutline,
  Logout,
  Login,
  AccountCircle,
} from 'mdi-material-ui';

import styles from './MainHeader.css';

const useStyles = makeStyles(styles);

const MainHeader = ({ 
  
  user,
  onItemClick,

}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            <FormattedMessage id={'App.name'} description="Title" defaultMessage="Feedback" />
          </Typography>          
          { 
            user ? 
              <React.Fragment>                            
                {user.content.username}
                <IconButton
                  color="inherit"
                  className={classes.mainIcon}
                  onClick={() => onItemClick('profile')}
                >
                  <AccountCircle />
                </IconButton>
                <IconButton
                  color="inherit"
                  className={classes.mainIcon}
                  onClick={() => onItemClick('logout')}
                >
                  <Logout />
                </IconButton>
              </React.Fragment>
            : 
              <React.Fragment>
                <AccountCircleOutline /> 
                <IconButton
                  color="inherit"
                  className={classes.mainIcon}
                  onClick={() => onItemClick('login')}
                >
                  <Login />
                </IconButton>
              </React.Fragment>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
