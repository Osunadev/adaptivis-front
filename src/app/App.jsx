import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { setCurrentUser } from 'redux/user-auth/user-auth.actions';
import { selectCurrentUser } from 'redux/user-auth/user-auth.selectors';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

import { getUserFromStorage } from '../utils/tokens/jwt.utils';

/**
 * App component that checks on the currentUser value and decides
 * to render the Authenticaded or Unauthenticated part of the app
 */
class App extends Component {
  async componentDidMount() {
    const { setUser } = this.props;

    /** Gets the user from the accessToken stored in local storage */
    const userFromStorage = await getUserFromStorage();

    setUser(userFromStorage);
  }

  render() {
    const { currentUser } = this.props;

    return currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  }
}

// The props that our App component receives
App.propTypes = {
  setUser: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.oneOf(['student', 'teacher', 'admin']),
    name: PropTypes.string,
    id: PropTypes.string
  })
};

// We set this currentUser to null because currentUser is not required
// to avoid error messages on the console, because could be an object or null
App.defaultProps = {
  currentUser: null
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
