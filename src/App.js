import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './pages/register/register.page';
import RegisterUser from './pages/register/register-user.page';
import LogIn from './pages/log-in/log-in.page';
import LandingMenu from './components/landing-menu/landing-menu.component';
import LandingHome from './pages/landing-home/landing-home.page';

import BodyBackground from './components/body-background/body-background.component';

import './App.css';

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
        <BodyBackground background='linear-gradient(to left bottom, #5428b0, #006feb, #009deb, #00c2be, #25e087);' />
        <LandingMenu />
        <Switch>
          <Route exact path='/' component={LandingHome} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/registro' component={RegisterUser} />
          <Route exact path='/registro/:typeUser' component={Register} />
        </Switch>
      </>
    );
  }
}

export default App;
