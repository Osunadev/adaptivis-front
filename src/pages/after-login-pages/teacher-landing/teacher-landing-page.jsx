import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general-purpose/path-not-found/path-not-found.component';

import TeacherWithHeaderAndMenu from 'components/after-login-components/teacher-with-header-and-menu/teacher-with-header-and-menu.component';
import CreateSubjectsForm from 'components/after-login-components/create-subjects/create-subject-form/create-subject-form.component';
import CreateSubjectsTable from 'components/after-login-components/create-subjects/create-subjects-table/create-subjects-table-fetched.component';

const TeacherLanding = ({ user, history }) => {
  return (
    <div>
      <TeacherWithHeaderAndMenu user={user} history={history}>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/teacher/grupos' />}
          />
          <Route
            exact
            path='/login'
            render={() => <Redirect to='/teacher/grupos' />}
          />
          <Route
            path='/teacher/perfil'
            component={() => <p>teacher Perfil</p>}
          />
          <Route
            path='/teacher/grupos'
            component={() => <CreateSubjectsTable />}
          />
          <Route
            path='/teacher/crear-grupo'
            component={() => <CreateSubjectsForm />}
          />
          <Route
            exact
            path='/teacher/consultar-resultados'
            component={() => <p>Consultar Resultados</p>}
          />
          <Route
            path='*'
            render={() => (
              <PathNotFound btnTitle='Regresar a mis grupos' btnRoute='/' />
            )}
          />
        </Switch>
      </TeacherWithHeaderAndMenu>
    </div>
  );
};

export default withRouter(TeacherLanding);
