import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general-purpose/path-not-found/path-not-found.component';

import StudentWithHeaderAndMenu from 'components/after-login-components/student-with-header-and-menu/student-with-header-and-menu.component';

import MySubjectsPage from 'pages/after-login-pages/my-subjects/my-subjects.page';
import MyProfileLandingPage from 'pages/after-login-pages/my-profile/my-profile-landing.page';
import MyResultsPage from 'pages/after-login-pages/my-results/my-results.page';
import UploadResultsPage from 'pages/after-login-pages/upload-results/upload-results.page';

import DemographicPreLandingPage from 'pages/after-login-pages/demographic-pre-landing/demographic-pre-landing.page';

const StudentLanding = ({ user, history }) => {
  // If it's whether or not his/her first time accessing
  return user.isFirstTimeAccess ? (
    <DemographicPreLandingPage />
  ) : (
    <div>
      <StudentWithHeaderAndMenu user={user} history={history}>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/student/cursos' />}
          />
          <Route
            exact
            path='/login'
            render={() => <Redirect to='/student/cursos' />}
          />
          <Route exact path='/student/cursos' component={MySubjectsPage} />
          <Route path='/student/perfil' component={MyProfileLandingPage} />
          <Route
            exact
            path='/student/consultar-resultados'
            component={MyResultsPage}
          />
          <Route
            exact
            path='/student/contestar-encuestas'
            component={UploadResultsPage}
          />
          <Route
            path='*'
            render={() => (
              <PathNotFound btnTitle='Regresar a mis cursos' btnRoute='/' />
            )}
          />
        </Switch>
      </StudentWithHeaderAndMenu>
    </div>
  );
};

export default withRouter(StudentLanding);
