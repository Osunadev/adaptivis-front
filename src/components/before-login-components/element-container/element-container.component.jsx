import React from 'react';
import PropTypes from 'prop-types';
import { FormTitle, Container } from './element-container.style';

// By default, big is taken as false if no prop is passed down to FormContainer
const ElementContainer = ({ title, width, specs, children }) => {
  return (
    <>
      <FormTitle>{title}</FormTitle>
      <Container specs={specs} width={width}>
        {children}
      </Container>
    </>
  );
};

ElementContainer.defaultProps = {
  specs: null,
  width: null
};

ElementContainer.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  specs: PropTypes.shape({ width: PropTypes.string, height: PropTypes.string }),
  children: PropTypes.node.isRequired
};

export default ElementContainer;
