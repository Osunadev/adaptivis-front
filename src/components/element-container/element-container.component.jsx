import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const FormTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 38px;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 0 2rem;
  width: ${props => (props.big ? '550px' : '500px')};
  background: white;

  ${props =>
    props.specs &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: ${() => props.specs.height};
      width: ${() => props.specs.width};
      padding: 0px;
    `}
`;

// By default, big is taken as false if no prop is passed down to FormContainer
const ElementContainer = ({ title, big, specs, children }) => {
  return (
    <>
      <FormTitle>{title}</FormTitle>
      <Container big={big} specs={specs}>
        {children}
      </Container>
    </>
  );
};

ElementContainer.defaultProps = {
  big: false,
  specs: null
};

ElementContainer.propTypes = {
  title: PropTypes.string.isRequired,
  big: PropTypes.bool,
  specs: PropTypes.shape({ width: PropTypes.string, height: PropTypes.string }),
  children: PropTypes.element.isRequired
};

export default ElementContainer;
