import React from 'react';

import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import ChangePassword from 'components/before-login-components/change-password/change-password.component';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';

const ChangePasswordPage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}/:id`} component={ChangePassword} />
        <Route
          path='*'
          render={({ history }) => <NotFoundPage history={history} />}
        />
      </Switch>
    </>
  );
};

ChangePasswordPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ChangePasswordPage;
