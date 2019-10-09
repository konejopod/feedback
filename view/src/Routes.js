import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeContainer from './pages/home/HomeContainer';
import AuthContainer from './pages/auth/AuthContainer';
import ProfileContainer from './pages/profile/ProfileContainer';
import NewFeedbackContainer from './pages/new-feedback/NewFeedbackContainer';
import ReplyFeedbackContainer from './pages/reply-feedback/ReplyFeedbackContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/login' component={AuthContainer} />
      <Route path='/profile' component={ProfileContainer} />
      <Route path='/reply-feedback/:feedbackCode' component={ReplyFeedbackContainer} />
    </Switch>
  );
}
export default Routes;