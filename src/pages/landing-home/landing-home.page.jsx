import React from 'react';

import styled from 'styled-components';

const ContainerHome = styled.div`
  width: 1000px;
  height: 80vh;
  margin: 50px auto;
  background: white;
`;

const LandingHome = () => {
  return (
    <>
      <ContainerHome>
        <h1>Bienvenidos a Adaptivis</h1>
      </ContainerHome>
    </>
  );
};

export default LandingHome;
