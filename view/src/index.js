import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Theme from './index.theme';
import Routes from './Routes';
import constants from './constants';
import reduxStore from './store';

const intl = newLanguage => {

  // IE11 or Safari 9
  // if (!Intl.PluralRules) { 
  //   require('@formatjs/intl-pluralrules/polyfill');
  //   require('@formatjs/intl-pluralrules/dist/locale-data/en');
  //   require('@formatjs/intl-pluralrules/dist/locale-data/es');
  // }
  // if (!Intl.RelativeTimeFormat) {
  //   require('@formatjs/intl-relativetimeformat/polyfill');
  //   require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
  //   require('@formatjs/intl-relativetimeformat/dist/locale-data/es');
  // }

  const defLanguage = 'en-US';
  let messages;
  let language = newLanguage || (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
  let langNoRegion = language.toLowerCase().split(/[_-]+/)[0];
  try {
    messages = require(`./lang/${langNoRegion}.json`);
  } catch (e) {
    langNoRegion = defLanguage.toLowerCase().split(/[_-]+/)[0];
    messages = require(`./lang/${langNoRegion}.json`);
    console.error(`Language file for '${language}' not found, using default: ${langNoRegion}`);
  }
  return { language, messages };
}
let { language, messages } = intl();

const store = reduxStore({ language, version: constants.APP_VERSION });

const render = () => {
  console.log(store.getState());

  if (store.getState().language !== language) {
    language = store.getState().language;
    messages = intl(store.getState().language).messages;
  }
  
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider theme={Theme}>
        <IntlProvider locale={language} messages={messages}>
          <MuiPickersUtilsProvider utils={MomentUtils} locale={language} moment={moment}>
            <BrowserRouter>
              <SnackbarProvider>
                <App>
                  <Routes />
                </App>
              </SnackbarProvider>
            </BrowserRouter>
          </MuiPickersUtilsProvider>
        </IntlProvider>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'));
};

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
