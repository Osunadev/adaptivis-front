import styled, { css } from 'styled-components';

export const ContainerSectionHeader = styled.div`
  width: 1000px;
  padding: 32px;
  margin: 16px auto 32px;
  background: #dbefe8;
  border-radius: 10px;
  border: 2px solid white;
`;

const textInputSyles = css`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1.5px solid #a5b9b2;
  height: 50px;
  padding: 8px;
  color: black;
  background: none;
  outline: none;
`;

export const TitleTextInput = styled.input`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;

  ${() => textInputSyles}
`;

export const DescriptionTextInput = styled.input`
  font-size: 24px;
  ${() => textInputSyles}
`;

export const SectionTitle = styled.h1`
  width: 1000px;
  color: white;
  font-size: 48px;
  margin: 0 auto;
`;
