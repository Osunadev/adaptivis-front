import React from 'react';

import { ReactComponent as WelcomeImg } from 'assets/imgs/welcome-image.svg';
import {
  ContainerLanding,
  HomeDescription,
  HomeTitle,
  TextContainer
} from './landing-home.styles';

const LandingHomePage = () => {
  return (
    <ContainerLanding>
      <TextContainer>
        <HomeTitle>BIENVENIDO A ADAPTIVIS</HomeTitle>
        <HomeDescription>
          ¡La plataforma adaptiva para la creación de materias, grupos y
          cuestionarios personalizables, en donde alumnos y profesores comparten
          sus resultados!
        </HomeDescription>
      </TextContainer>
      <WelcomeImg style={{ width: '650px', marginLeft: '-48px' }} />
    </ContainerLanding>
  );
};

export default LandingHomePage;
