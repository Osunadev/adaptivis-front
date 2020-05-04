import React from 'react';
import PropTypes from 'prop-types';
import { FormTitle, Container } from './general-container.style';

// By default, big is taken as false if no prop is passed down to FormContainer
const GeneralContainer = ({
  children,
  title,
  width,
  height,
  transparent,
  rounded
}) => {
  return (
    <>
      {title && <FormTitle>{title}</FormTitle>}
      <Container
        width={width}
        height={height}
        rounded={rounded}
        transparent={transparent}
      >
        {children}
      </Container>
    </>
  );
};

GeneralContainer.defaultProps = {
  width: null,
  height: null,
  rounded: null,
  transparent: null,
  title: null
};

GeneralContainer.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  transparent: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default GeneralContainer;
