import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeContainer from './pages/home/HomeContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      {/* <Route path='/help' component={HelpContainer} /> */}
    </Switch>
  );
}
export default Routes;