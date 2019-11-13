import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterPage from 'pages/register/register.page';
import LoginPage from 'pages/login/login.page';
import ConfirmEmailPage from 'pages/confirm-email/confirm-email.page';
import ChangePasswordPage from 'pages/change-password/change-password.page';
import LandingHomePage from 'pages/landing-home/landing-home.page';
import NotFoundPage from 'pages/not-found/not-found.page';

import LandingMenu from 'components/landing-menu/landing-menu.component';

import BodyAttributes from 'components/body-attributes/body-attributes.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  render() {
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
          <Route path='/reestablecer' component={ChangePasswordPage} />
          <Route
            path='*'
            render={({ history }) => <NotFoundPage history={history} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
