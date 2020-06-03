import React, { Component } from 'react';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

import { getUserFromStorage } from '../utils/tokens/jwt-utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  async componentDidMount() {
    const currentUser = await getUserFromStorage();

    this.setState({ currentUser });
  }

  setUser = user => {
    this.setState({ currentUser: user });
  };

  render() {
    const { currentUser } = this.state;

    return currentUser ? (
      <AuthenticatedApp user={currentUser} setUser={this.setUser} />
    ) : (
      <UnauthenticatedApp setUser={this.setUser} />
    );
  }
}

export default App;
