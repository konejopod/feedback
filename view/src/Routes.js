import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeContainer from './pages/home/HomeContainer';
import AuthContainer from './pages/auth/AuthContainer';
import ProfileContainer from './pages/profile/ProfileContainer';
import GiveFeedbackContainer from './pages/give-feedback/GiveFeedbackContainer';
import FeedbackResultContainer from './pages/feedback-result/FeedbackResultContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/login' component={AuthContainer} />
      <Route path='/profile' component={ProfileContainer} />
      <Route path='/give-feedback/:feedbackCode' component={GiveFeedbackContainer} />
      <Route path='/feedback-result/:feedbackCode' component={FeedbackResultContainer} />
    </Switch>
  );
}
export default Routes;