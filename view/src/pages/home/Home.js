import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import styles from './Home.css';

const useStyles = makeStyles(styles);

const Home = ({ 

  intl,
  language,
  onSelectLanguage,

}) => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <p>
          {intl.formatMessage({id:'App.greetings'})}
        </p>
        <Button 
          color="primary"
          variant="contained"
          disabled={language ==='en-US' || language === 'en'}
          onClick={() => onSelectLanguage('en-US')} 
        >
          English
        </Button>
        <br/>
        <Button 
          color="primary"
          variant="contained"
          disabled={language === 'es-ES' || language === 'es'}
          onClick={() => onSelectLanguage('es-ES')} 
        >
          Castellano
        </Button>
      </header>
    </div>
  );
}

export default Home;
