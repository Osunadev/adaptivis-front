import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All of pages we used before user logs in
import RegisterPage from 'pages/before-login-pages/register/register.page';
import LoginPage from 'pages/before-login-pages/login/login.page';
import ConfirmEmailPage from 'pages/before-login-pages/confirm-email/confirm-email.page';
import ChangePasswordPage from 'pages/before-login-pages/change-password/change-password.page';
import LandingHomePage from 'pages/before-login-pages/landing-home/landing-home.page';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';
import LandingMenu from 'components/before-login-components/landing-menu/landing-menu.component';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';

const UnauthenticatedApp = () => {
  return (
    <>
      <BodyAttributes background='linear-gradient(to right, #0083B0, #00B4DB)' />
      {/* We use a Route as / for LandingMenu because we want to selectively render our Menu depending on the route we're in */}
      <Route path='/' component={LandingMenu} />
      <Switch>
        <Route exact path='/' component={LandingHomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='/registro' component={RegisterPage} />
        <Route path='/confirmacion' component={ConfirmEmailPage} />
        <Route path='/restablecer' component={ChangePasswordPage} />
        <Route
          path='*'
          render={({ history }) => <NotFoundPage history={history} />}
        />
      </Switch>
    </>
  );
};

export default UnauthenticatedApp;
