import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';

import { 
  Login, 
  Logout,
  DotsVertical,
} from 'mdi-material-ui';

import styles from './UserMenu.css';
import UserAvatar from '../UserAvatar';

const useStyles = makeStyles(styles);

const propTypes = {
};

const UserMenu = ({
  
  intl,
  user,
  onItemClick,

}) => {

  const [ anchor, setAnchor ] = React.useState();
  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        className={classes.mainIcon}
        onClick={event => setAnchor(event.currentTarget)}
      >
        <DotsVertical />
      </IconButton>
      <Menu
        open={!!anchor}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClick={() => setAnchor(null)}
        onClose={() => setAnchor(null)}
      >
        <MenuItem onClick={() => onItemClick('profile')} disabled={!user}>
          <UserAvatar user={user} />
          {intl.formatMessage({id:'UserMenu.profile'})}
        </MenuItem>
        {
          user ?
            <MenuItem onClick={() => onItemClick('logout')}>
              <Logout className={classes.menuIcon} />
              {intl.formatMessage({id:'UserMenu.logout'})}
            </MenuItem>
          :
            <MenuItem onClick={() => onItemClick('login')}>
              <Login className={classes.menuIcon} />
              {intl.formatMessage({id:'UserMenu.login'})}
            </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
}

UserMenu.propTypes = propTypes;

export default UserMenu;