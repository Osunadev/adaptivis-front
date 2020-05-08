import React from 'react';

import { ReactComponent as WelcomeImg } from 'assets/imgs/welcome-image.svg';

const LandingHomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '80px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div>
        <div style={{ width: '480px' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0px'
            }}
          >
            BIENVENIDO A
          </h1>
          <h1
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0px'
            }}
          >
            ADAPTIVIS
          </h1>
        </div>
        <p
          style={{
            color: 'white',
            fontSize: '20px',
            width: '480px',
            marginTop: '16px'
          }}
        >
          ¡La plataforma adaptiva para la creación de materias, grupos y
          cuestionarios personalizables, en donde alumnos y profesores comparten
          sus resultados!
        </p>
      </div>
      <WelcomeImg style={{ width: '700px', height: 'auto' }} />
    </div>
  );
};

export default LandingHomePage;
