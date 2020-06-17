import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import PathNotFound from 'components/after-login-components/general-purpose/path-not-found/path-not-found.component';

import StudentWithHeaderAndMenu from 'components/after-login-components/student-with-header-and-menu/student-with-header-and-menu.component';

import MySubjectsPage from 'pages/after-login-pages/my-subjects/my-subjects.page';
import MyProfileLandingPage from 'pages/after-login-pages/my-profile/my-profile-landing.page';
import MyResultsPage from 'pages/after-login-pages/my-results/my-results.page';
import UploadResultsPage from 'pages/after-login-pages/upload-results/upload-results.page';
import StudentQuizVisualizer from 'components/after-login-components/student-quiz-visualizer/complete-quiz-visualizer/student-quiz-visualizer.component';

const StudentLanding = () => {
  return (
    <div>
      <StudentWithHeaderAndMenu>
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
            exact
            path='/student/visualizar-encuesta'
            component={StudentQuizVisualizer}
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
