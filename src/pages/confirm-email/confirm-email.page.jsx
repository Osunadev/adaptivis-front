import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ChangeConfirmAccount from 'components/change-confirm-account/change-confirm-account.component';
import NotFoundPage from 'pages/not-found/not-found.page';

const ConfirmEmailPage = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/confirmacion/profesor/:id'
          render={routeProps => (
            <ChangeConfirmAccount
              componentType='confirm-account'
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/confirmacion/alumno/:id'
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

export default ConfirmEmailPage;
