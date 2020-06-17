import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from 'redux/user-auth/user-auth.actions';
import { selectCurrentUser } from 'redux/user-auth/user-auth.selectors';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

import { getUserFromStorage } from '../utils/tokens/jwt-utils';

class App extends Component {
  async componentDidMount() {
    const { setUser } = this.props;
    const currentUser = await getUserFromStorage();

    setUser(currentUser);
  }

  render() {
    const { currentUser } = this.props;

    return currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
