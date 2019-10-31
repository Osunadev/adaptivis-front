import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ElementContainer from 'components/element-container/element-container.component';
import logoAlumno from 'assets/alumno.png';
import logoProfesor from 'assets/profesor.png';

import {
  ContainerTitle,
  ContainerImage,
  Container
} from './register-user.style';

const RegisterUser = ({ history }) => {
  return (
    <ElementContainer
      title='Registro de cuenta'
      specs={{ height: '450px', width: '700px' }}
    >
      <Container onClick={() => history.push('/registro/alumno')}>
        <ContainerImage src={logoAlumno} alt='registro-alumno' />
        <ContainerTitle>Alumno</ContainerTitle>
      </Container>
      <Container onClick={() => history.push('/registro/profesor')}>
        <ContainerImage src={logoProfesor} alt='registro-profesor' />
        <ContainerTitle>Profesor</ContainerTitle>
      </Container>
    </ElementContainer>
  );
};

RegisterUser.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(RegisterUser);
