import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'redux/user/user.selectors';

import { setCurrentUserFromToken } from 'redux/user/user.actions';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

class App extends Component {
  componentDidMount() {
    // Updating current user from jwt payload
    const { updateCurrentUser } = this.props;
    updateCurrentUser();
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
  updateCurrentUser: () => dispatch(setCurrentUserFromToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
