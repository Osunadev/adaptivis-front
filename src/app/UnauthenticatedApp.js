import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All of pages we used before user logs in
import RegisterPage from 'pages/before-login-pages/register/register.page';
import LoginForm from 'components/before-login-components/login/login-form/login-form.component';
import ConfirmEmailPage from 'pages/before-login-pages/confirm-email/confirm-email.page';
import ChangePasswordPage from 'pages/before-login-pages/change-password/change-password.page';
import LandingHomePage from 'pages/before-login-pages/landing-home/landing-home.page';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';
import LandingMenu from 'components/before-login-components/landing-menu-bar/landing-menu-bar.component';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

const UnauthenticatedApp = () => {
  return (
    <>
      <GlobalStyle bgColor='linear-gradient(to right, #0083b0, #00b4db)' />
      {/* We use a Route as / for LandingMenu because we want to selectively render our Menu depending on the route we're in */}
      <Route path='/' component={LandingMenu} />
      <Switch>
        <Route exact path='/' component={LandingHomePage} />
        <Route exact path='/login' component={LoginForm} />
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
