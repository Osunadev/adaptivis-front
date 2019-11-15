import React from 'react';

import { Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import BodyAttributes from 'components/body-attributes/body-attributes.component';

import MisCursos from 'pages/landing-student/mis-cursos';
import ViewScores from './view-scores';
import HeaderMenu from 'components/header-menu/header-menu.component';

const { Header, Content, Sider } = Layout;

const LandingStudent = ({ match, url, location }) => {
  return (
    <div>
      <BodyAttributes background='white' />
      <HeaderMenu>
        <Route exact path={`/loggedin/cursos`} component={MisCursos} />
        <Route exact path={`/loggedin/resultados`} component={ViewScores} />
      </HeaderMenu>
    </div>
  );
};

export default LandingStudent;
