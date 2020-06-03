import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general-purpose/path-not-found/path-not-found.component';
import GlobalStyle from 'components/general-use-components/global-style/global-style.component';

import AdminWithHeaderAndMenu from 'components/after-login-components/admin-with-header-and-menu/admin-with-header-and-menu.component';

import CompleteQuizMaker from 'components/after-login-components/quiz-maker/complete-quiz-maker/complete-quiz-maker.component';
import TeacherRequestsDataFetched from 'components/after-login-components/teacher-requests/teacher-requests-data-fetched.component';
import SubjectsLandingPage from 'pages/after-login-pages/create-subjects/create-subjects.page';

const AdminLanding = ({ user, history, setUser }) => {
  return (
    <div>
      <AdminWithHeaderAndMenu user={user} setUser={setUser} history={history}>
        <GlobalStyle bgColor='white' />
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
          <Route path='/admin/perfil' component={() => <p>Admin Perfil</p>} />
          <Route path='/admin/grupos' component={() => <p>Admin Grupos</p>} />
          <Route
            path='/admin/crear-grupo'
            component={() => <p>Crear Grupo</p>}
          />
          <Route
            exact
            path='/admin/solicitud-profesor'
            component={TeacherRequestsDataFetched}
          />
          <Route
            exact
            path='/admin/consultar-resultados'
            component={() => <p>Consultar Resultados</p>}
          />
          <Route
            exact
            path='/admin/encuestas-abiertas'
            component={() => <p>Consultar Resultados</p>}
          />
          <Route
            exact
            path='/admin/crear-encuesta'
            component={CompleteQuizMaker}
          />
          <Route path='/admin/materias' component={SubjectsLandingPage} />
          <Route
            path='*'
            render={() => (
              <PathNotFound btnTitle='Regresar a mis grupos' btnRoute='/' />
            )}
          />
        </Switch>
      </AdminWithHeaderAndMenu>
    </div>
  );
};

export default withRouter(AdminLanding);
