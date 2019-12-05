import styled, { css } from 'styled-components';

export const FormTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 38px;
  padding-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto 32px auto;
  flex-direction: column;
  padding: 0 2rem;
  width: ${props => (props.width ? props.width : '550px')};
  background: white;

  ${props =>
    props.specs &&
    css`
      flex-direction: row;
      background: none;
      align-items: center;
      justify-content: center;
      height: ${() => props.specs.height};
      width: ${() => props.specs.width};
      padding: 16px;
    `}
`;
