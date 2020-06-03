import React, { Component } from 'react';

import { getCurrentUser } from 'utils/users/user-examples';

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

  setUser = user => {
    this.setState({ currentUser: user });
  };

  render() {
    const { currentUser } = this.state;

    return currentUser ? (
      <AuthenticatedApp user={currentUser} />
    ) : (
      <UnauthenticatedApp setUser={this.setUser} />
    );
  }
}

export default App;
