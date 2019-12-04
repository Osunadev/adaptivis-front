import React from 'react';
import PropTypes from 'prop-types';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';
import { Container } from './confirm-container.style';

const ConfirmContainer = ({ children }) => {
  return (
    <>
      <BodyAttributes noOverflow />
      <Container>{children}</Container>
    </>
  );
};

ConfirmContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ConfirmContainer;
