import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general/path-not-found/path-not-found.component';

import HeaderMenuPage from 'components/after-login-components/general/header-menu/header-menu.component';
import CompleteQuizMaker from 'components/after-login-components/quiz-maker/complete-quiz-maker/complete-quiz-maker.component';
import TeacherRequestsDataFetched from 'components/after-login-components/teacher-requests/teacher-requests-data-fetched.component';
import SubjectsLandingPage from 'pages/after-login-pages/teacher-admin/subjects/subjects-landing.page';

const AdminLanding = () => {
  return (
    <div>

      <HeaderMenuPage>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/admin/grupos' />}
          />
          {/* If we come from login */}
          <Route
            exact
            path='/login'
            render={() => <Redirect to='/admin/grupos' />}
          />
          <Route path='/admin/grupos' component={() => <p>Admin Grupos</p>} />
          <Route
            path='/admin/crear-grupo'
            component={() => <p>Crear Grupo</p>}
          />
          <Route path='/admin/perfil' component={() => <p>Admin Perfil</p>} />
          <Route
            exact
            path='/admin/consultar-resultados'
            component={() => <p>Consultar Resultados</p>}
          />
          <Route
            exact
            path='/admin/crear-encuesta'
            component={CompleteQuizMaker}
          />
          <Route
            exact
            path='/admin/solicitud-profesor'
            component={TeacherRequestsDataFetched}
          />
          <Route path='/admin/materias' component={SubjectsLandingPage} />
          <Route
            path='*'
            render={() => (
              <PathNotFound btnTitle='Regresar a mis grupos' btnRoute='/' />
            )}
          />
        </Switch>
      </HeaderMenuPage>
    </div>
  );
};

export default AdminLanding;
