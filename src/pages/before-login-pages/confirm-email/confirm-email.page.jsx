import React from 'react';

import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import ChangeConfirmAccount from 'components/before-login-components/change-confirm-account/change-confirm-account.component';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';

const ConfirmEmailPage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.path}/:id`}
          render={routeProps => (
            <ChangeConfirmAccount
              componentType='confirm-account'
              {...routeProps}
            />
          )}
        />
        <Route
          path='*'
          render={({ history }) => <NotFoundPage history={history} />}
        />
      </Switch>
    </>
  );
};

ConfirmEmailPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ConfirmEmailPage;
