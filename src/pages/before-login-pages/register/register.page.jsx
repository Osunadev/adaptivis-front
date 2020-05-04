import React from 'react';

import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';
import SelectUser from 'components/before-login-components/register/select-user/select-user.component';
import RegisterForm from 'components/before-login-components/register/register-form/register-form.component';

import USER_DATA from './register.data';

const RegisterPage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={routeProps => (
            <SelectUser userCardData={USER_DATA} {...routeProps} />
          )}
        />
        <Route
          exact
          path={`${match.path}/alumno`}
          key='registro-alumno'
          component={RegisterForm}
        />
        <Route
          exact
          path={`${match.path}/profesor`}
          key='registro-profesor'
          component={RegisterForm}
        />
        <Route
          path='*'
          render={({ history }) => <NotFoundPage history={history} />}
        />
      </Switch>
    </>
  );
};

RegisterPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default RegisterPage;
