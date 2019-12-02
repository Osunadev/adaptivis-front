import React from 'react';
import { Route } from 'react-router-dom';
import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';

import HeaderMenu from 'components/after-login-components/header-menu/header-menu.component';
import MySubjects from 'pages/after-login-pages/student/my-subjects/my-subjects.page';
import MyProfile from 'pages/after-login-pages/student/my-profile/my-profile.page';
import MyResults from 'pages/after-login-pages/student/my-results/my-results.page';
import UploadResults from 'pages/after-login-pages/student/upload-results/upload-results.page';

const StudentLanding = ({ match }) => {
  return (
    <div>
      <BodyAttributes background='white' />
      <HeaderMenu>
        <Route exact path={`${match.path}/cursos`} component={MySubjects} />
        <Route exact path={`${match.path}/perfil`} component={MyProfile} />
        <Route
          exact
          path={`${match.path}/consultar-resultados`}
          component={MyResults}
        />
        <Route
          exact
          path={`${match.path}/subir-resultados`}
          component={UploadResults}
        />
      </HeaderMenu>
    </div>
  );
};

export default StudentLanding;
