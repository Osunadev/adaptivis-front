import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general/path-not-found/path-not-found.component';

import HeaderMenuPage from 'components/after-login-components/general/header-menu/header-menu.component';
import MySubjectsPage from 'pages/after-login-pages/student/my-subjects/my-subjects.page';
import MyProfileLandingPage from 'pages/after-login-pages/student/my-profile/my-profile-landing.page';
import MyResultsPage from 'pages/after-login-pages/student/my-results/my-results.page';
import UploadResultsPage from 'pages/after-login-pages/student/upload-results/upload-results.page';

import DemographicPreLandingPage from 'pages/after-login-pages/student/demographic-pre-landing/demographic-pre-landing.page';

const StudentLanding = ({ isFirstTimeAccess = false }) => {
  // If it's whether or not his/her first time accessing
  return isFirstTimeAccess ? (
    <>
      <DemographicPreLandingPage />
    </>
  ) : (
    <div>
      <HeaderMenuPage>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/alumno/cursos' />}
          />
          <Route
            exact
            path='/login'
            render={() => <Redirect to='/alumno/cursos' />}
          />
          <Route exact path='/alumno/cursos' component={MySubjectsPage} />
          <Route path='/alumno/perfil' component={MyProfileLandingPage} />
          <Route
            exact
            path='/alumno/consultar-resultados'
            component={MyResultsPage}
          />
          <Route
            exact
            path='/alumno/contestar-encuestas'
            component={UploadResultsPage}
          />
          <Route
            path='*'
            render={() => (
              <PathNotFound btnTitle='Regresar a mis cursos' btnRoute='/' />
            )}
          />
        </Switch>
      </HeaderMenuPage>
    </div>
  );
};

export default StudentLanding;
