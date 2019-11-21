import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

const PressedButton = ({ history }) => {
  const handleClick = e => {
    const keyPath = e.key;

    switch (keyPath) {
        case 'ver-historial':
          history.push('/loggedinAdm/alumnos-grupo');
          break;
      }
  };

  return (
    <Button type='primary'
    onClick={handleClick}
    key='ver-historial'
    >
      Crear materia
    </Button>
  );
};

const ButtonRouted = withRouter(PressedButton);

export default ButtonRouted;
