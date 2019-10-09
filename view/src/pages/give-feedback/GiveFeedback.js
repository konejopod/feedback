import React from 'react';
import { makeStyles, Slider, } from '@material-ui/core';

import { 
  Button,
  TextField, 
  Typography,
} from '@material-ui/core';

import {
  Star,
} from 'mdi-material-ui'

import styles from './GiveFeedback.css';

const useStyles = makeStyles(styles);

const GiveFeedback = ({ 

  intl,
  feedback,
  message,
  onChange,
  onConfirm

}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <form 
        noValidate 
        className={classes.form}
        autoComplete="off" 
        onSubmit={onConfirm}
      >
        <TextField
          required
          className={classes.textField}          
          type="text"
          value={feedback.code || ''}
          label={intl.formatMessage({id:'GiveFeedback.code'})}
          onChange={(evt) => onChange('code', evt.target.value)}
          />
        <TextField
          className={classes.textField}          
          type="text"
          value={feedback.username || ''}
          label={intl.formatMessage({id:'GiveFeedback.username'})}
          onChange={(evt) => onChange('username', evt.target.value)}
        />
        <div className={classes.stars}>
          { [...Array(5).keys()].map(v => <Star key={v} color={feedback.total > v ? 'disabled' : 'inherit'} />) }
        </div>
        <Typography className={classes.label}>
          {intl.formatMessage({id:'Feedback.field1'})}
        </Typography>
        <Slider
          classes={{root: classes.slider}}
          step={1}
          max={5}
          value={feedback['field1'] || 0}
          marks
          onChange={(evt, value) => onChange('field1', value)}
        />
        <Typography className={classes.label}>
          {intl.formatMessage({id:'Feedback.field2'})}
        </Typography>
        <Slider
          classes={{root: classes.slider}}
          step={1}
          max={5}
          value={feedback['field2'] || 0}
          marks
          onChange={(evt, value) => onChange('field2', value)}
        />
        <Typography className={classes.label}>
          {intl.formatMessage({id:'Feedback.field3'})}
        </Typography>
        <Slider
          classes={{root: classes.slider}}
          step={1}
          max={5}
          value={feedback['field3'] || 0}
          marks
          onChange={(evt, value) => onChange('field3', value)}
        />
        <Typography className={classes.label}>
          {intl.formatMessage({id:'Feedback.field4'})}
        </Typography>
        <Slider
          classes={{root: classes.slider}}
          step={1}
          max={5}
          value={feedback['field4'] || 0}
          marks
          onChange={(evt, value) => onChange('field4', value)}
        />
        <Typography className={classes.label}>
          {intl.formatMessage({id:'Feedback.field5'})}
        </Typography>
        <Slider
          classes={{root: classes.slider}}
          step={1}
          max={5}
          value={feedback['field5'] || 0}
          marks
          onChange={(evt, value) => onChange('field5', value)}
        />
        <Button 
          type="submit" 
          color="primary"
          variant="contained" 
          className={classes.actionButton}
          onClick={onConfirm}
        >
          {intl.formatMessage({id:'GiveFeedback.sendBtn'})}
        </Button>
        <Typography 
          className={classes.message} 
          align="center" 
          color={message.error ? 'error' : 'primary'}
        >
          {message.text}
        </Typography>
      </form>
    </div>
  );
}

export default GiveFeedback;
