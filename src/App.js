import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from 'pages/register/register.page';
import ConfirmAccount from 'pages/confirm-account/confirm-account.component';
import RegisterUser from 'pages/register/register-user.page';
import LogIn from 'pages/log-in/log-in.page';
import LandingMenu from 'components/landing-menu/landing-menu.component';
import LandingHome from 'pages/landing-home/landing-home.page';
import NotFound from 'pages/not-found/not-found.page';
import SideBar from 'components/sidebar/sidebar.component';

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
        <BodyAttributes background='linear-gradient(to left bottom, #5428b0, #006feb, #009deb, #00c2be, #25e087)' />
        {/* We use a Route as / for LandingMenu because we want to selectively render our Menu depending on the route we're in */}
        <Route path='/' component={LandingMenu} />
        <Switch>
          <Route exact path='/' component={LandingHome} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/registro' component={RegisterUser} />
          <Route
            exact
            path='/registro/alumno'
            key='registro-alumno'
            component={Register}
          />
          <Route
            exact
            path='/registro/profesor'
            key='registro-profesor'
            component={Register}
          />
          <Route
            exact
            path='/confirmacion/profesor/:id'
            key='confirm-profesor'
            component={ConfirmAccount}
          />
          <Route
            exact
            path='/confirmacion/alumno/:id'
            key='confirm-alumno'
            component={ConfirmAccount}
          />
          <Route
            exact
            path='/reestablecer/profesor/:id'
            key='reestablecer-profesor'
            render={routeProps => (
              // These routeProps are match, location and history
              <ConfirmAccount {...routeProps} forgotPassword />
            )}
          />
          <Route
            exact
            path='/reestablecer/alumno/:id'
            key='reestablecer-alumno'
            render={routeProps => (
              <ConfirmAccount {...routeProps} forgotPassword />
            )}
          />
          <Route exact path='/landing' component={SideBar} />
          <Route
            path='*'
            render={({ history }) => <NotFound history={history} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
