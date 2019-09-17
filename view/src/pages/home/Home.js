import React from 'react';
import { makeStyles, } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { 
  Link, 
  Button,
  TextField, 
  Typography,
} from '@material-ui/core';

import styles from './Home.css';

const useStyles = makeStyles(styles);

const Home = ({ 

  intl,
  code,
  user,
  message,
  onChange,
  onConfirm

}) => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Typography align="left">
        {intl.formatMessage({id:'Home.greetings'})}
      </Typography>
      <form 
        noValidate 
        className={classes.form}
        autoComplete="off" 
        onSubmit={onConfirm}
      >
        <TextField
          id="code"
          required
          // error={message.fieldErrors && message.fieldErrors.includes('code')}
          label={intl.formatMessage({id:'Home.code'})}
          type="text"
          onChange={onChange}
          value={code}
          className={classes.textField}
          fullWidth
        />
        <Button 
          type="submit" 
          color="primary"
          variant="contained" 
          className={classes.button}
          onClick={onConfirm}
        >
          {intl.formatMessage({id:'Home.sendBtn'})}
        </Button>
        <Typography 
          className={classes.message} 
          align="center" 
          color={message.error ? 'error' : 'primary'}
        >
          {message.text}
        </Typography>
      </form>
      <Link component={RouterLink} to = "/new-feedback">
        {intl.formatMessage({id:'Home.createNewFeedback'})}
      </Link>
      <Typography>
        {!user && intl.formatMessage({id:'Auth.signInRequired'})}
      </Typography>
    </div>
  );
}

export default Home;
