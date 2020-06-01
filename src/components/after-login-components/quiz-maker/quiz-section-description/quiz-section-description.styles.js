import styled, { css } from 'styled-components';

export const ContainerSectionHeader = styled.div`
  width: 1000px;
  padding: 26px 32px;
  margin: 32px auto;
  background: white;
  border-radius: 10px;
  border: none;
`;

const textInputSyles = css`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1.5px solid #a5b9b2;
  height: 50px;
  color: black;
  background: none;
  outline: none;
`;

export const TitleTextInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 0 8px 8px;

  ${() => textInputSyles}
`;

export const DescriptionTextInput = styled.input`
  font-size: 18px;
  padding: 8px;
  margin-bottom: 16px;

  ${() => textInputSyles}
`;
