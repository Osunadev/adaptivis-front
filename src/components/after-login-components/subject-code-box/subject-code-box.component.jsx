import React from 'react';
import { Input, Button } from 'antd';

import { BoxContainer, ButtonContainer } from './subject-code-box.styles';

const AccessClassBox = () => {
  return (
    <BoxContainer>
      <h3 style={{ color: '#fff' }}>Ingrese el código de acceso:</h3>
      <Input />
      <ButtonContainer>
        <Button>Unirse</Button>
      </ButtonContainer>
    </BoxContainer>
  );
};

export default AccessClassBox;
