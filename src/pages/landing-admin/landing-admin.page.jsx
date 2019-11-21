import React from 'react';
import { Route } from 'react-router-dom';
import BodyAttributes from 'components/body-attributes/body-attributes.component';

import HeaderMenuAdm from 'components/header-menu-adm/h-menu-adm.component';
import Solicitudes from 'pages/landing-admin/solicitudes';
import InfoRequest from 'pages/landing-admin/info-request';
import MiPerfil from 'pages/landing-admin/mi-perfil';
import MateriasAbiertas from './materias-abiertas';
import MisGrupos from './mis-grupos';
import ConsultaResultados from './consulta-resultados';
import AlumnosGrupo from './alumnos-grupo';

const LandingAdmin = () => {
  return (
    <div>
      <BodyAttributes background='white' />
      <HeaderMenuAdm>
      <Route exact path={`/loggedinAdm/perfil`} component={MiPerfil} />
      <Route exact path={`/loggedinAdm/mis-grupos`} component={MisGrupos} />
        <Route exact path={`/loggedinAdm/solicitudes`} component={Solicitudes} />
        <Route exact path={`/loggedinAdm/consulta-resultados`} component={ConsultaResultados} />
        <Route exact path={`/loggedinAdm/materias-abiertas`} component={MateriasAbiertas} />
        <Route exact path={`/loggedinAdm/info-solicitud`} component={InfoRequest} />      
        <Route exact path={`/loggedinAdm/alumnos-grupo`} component={AlumnosGrupo} />   
      </HeaderMenuAdm>
    </div>
  );
};

export default LandingAdmin;
