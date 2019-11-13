import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ChangeConfirmAccount from 'components/change-confirm-account/change-confirm-account.component';
import NotFoundPage from 'pages/not-found/not-found.page';

const ChangePasswordPage = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/reestablecer/profesor/:id'
          render={routeProps => (
            <ChangeConfirmAccount
              componentType='change-password'
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/reestablecer/alumno/:id'
          render={routeProps => (
            <ChangeConfirmAccount
              componentType='change-password'
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

export default ChangePasswordPage;
