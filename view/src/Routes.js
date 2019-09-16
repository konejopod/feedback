import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeContainer from './pages/home/HomeContainer';
import AuthContainer from './pages/auth/AuthContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/login' component={AuthContainer} />
      {/* <Route path='/help' component={HelpContainer} /> */}
    </Switch>
  );
}
export default Routes;