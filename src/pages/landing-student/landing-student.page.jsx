import React from 'react';

import { Route } from 'react-router-dom';

import BodyAttributes from 'components/body-attributes/body-attributes.component';

import HeaderMenu from 'components/header-menu/header-menu.component';
import MisCursos from 'pages/landing-student/mis-cursos';
import ViewScores from './view-scores';
import MiPerfil from './mi-perfil';

const LandingStudent = () => {
  return (
    <div>
      <BodyAttributes background='white' />
      <HeaderMenu>
        <Route exact path={`/loggedin/cursos`} component={MisCursos} />
        <Route exact path={`/loggedin/perfil`} component={MiPerfil} />
        <Route exact path={`/loggedin/resultados`} component={ViewScores} />
      </HeaderMenu>
    </div>
  );
};

export default LandingStudent;
