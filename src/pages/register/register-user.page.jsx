import React from 'react';

import ElementContainer from 'components/element-container/element-container.component';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import logoAlumno from 'assets/alumno.png';
import logoProfesor from 'assets/docente.png';

const ContainerTitle = styled.h1`
  font-size: 32px;
  color: white;
`;

const ContainerImage = styled.img`
  height: 200px;
  width: auto;
  padding: 20px;
`;

const Container = styled.div`
  background: #2a289a;
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 0.95;
    transform: scale(1.05);
  }
`;

const RegisterUser = ({ history }) => {
  return (
    <ElementContainer
      title='Registro de cuenta'
      big
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

export default withRouter(RegisterUser);
