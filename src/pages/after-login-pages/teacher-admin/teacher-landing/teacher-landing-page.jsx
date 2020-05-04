import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general/path-not-found/path-not-found.component';

import HeaderMenuPage from 'components/after-login-components/general/header-menu/header-menu.component';

const TeacherLanding = () => {
  return (
    <div>

      <HeaderMenuPage>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/profesor/grupos' />}
          />
          <Route
            exact
            path='/login'
            render={() => <Redirect to='/profesor/grupos' />}
          />
          <Route
            path='/profesor/perfil'
            component={() => <p>Profesor Perfil</p>}
          />
          <Route
            path='/profesor/grupos'
            component={() => <p>Profesor Grupos</p>}
          />
          <Route
            path='/profesor/crear-grupo'
            component={() => <p>Crear Grupo</p>}
          />
          <Route
            exact
            path='/profesor/consultar-resultados'
            component={() => <p>Consultar Resultados</p>}
          />
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

export default TeacherLanding;
