import React, { Component } from 'react';

import { getCurrentUser } from 'utils/user-examples';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const user = getCurrentUser();

    this.setState({ currentUser: user });
  }

  render() {
    const { currentUser } = this.state;

    return currentUser ? (
      <AuthenticatedApp user={currentUser} />
    ) : (
      <UnauthenticatedApp />
    );
  }
}

export default App;
