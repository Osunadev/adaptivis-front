import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MyProfilePage from './my-profile.page';
import EditMyProfilePage from './edit-my-profile.page';

const MyProfileLandingPage = ({ match }) => {
  console.log(match.path);
  return (
    <Switch>
      <Route exact path={match.path} component={MyProfilePage} />
      <Route
        exact
        path={`${match.path}/editar`}
        component={EditMyProfilePage}
      />
    </Switch>
  );
};

export default MyProfileLandingPage;
