import React from 'react';
import { Route } from 'react-router-dom';
import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';

import HeaderMenuPage from 'components/after-login-components/header-menu/header-menu.component';
import MySubjectsPage from 'pages/after-login-pages/student/my-subjects/my-subjects.page';
import MyProfileLandingPage from 'pages/after-login-pages/student/my-profile/my-profile-landing.page';
import MyResultsPage from 'pages/after-login-pages/student/my-results/my-results.page';
import UploadResultsPage from 'pages/after-login-pages/student/upload-results/upload-results.page';

const StudentLanding = ({ match }) => {
  return (
    <div>
      <BodyAttributes background='white' />
      <HeaderMenuPage>
        <Route exact path={`${match.path}/cursos`} component={MySubjectsPage} />
        <Route path={`${match.path}/perfil`} component={MyProfileLandingPage} />
        <Route
          exact
          path={`${match.path}/consultar-resultados`}
          component={MyResultsPage}
        />
        <Route
          exact
          path={`${match.path}/subir-resultados`}
          component={UploadResultsPage}
        />
      </HeaderMenuPage>
    </div>
  );
};

export default StudentLanding;
