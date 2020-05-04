import React from 'react';

import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import ConfirmEmail from 'components/before-login-components/confirm-email/confirm-email.component';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';

const ConfirmEmailPage = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}/:id`} component={ConfirmEmail} />
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
