import styled, { css } from 'styled-components';

export const ContainerQuestion = styled.div`
  width: 1000px;
  padding: 26px 32px;
  margin: 32px auto;
  background: #dbefe8;
  border-radius: 10px;
  border: 2px solid #a5b9b2;
`;

export const ContainerQuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const textInputSyles = css`
  display: block;
  border: none;
  border-bottom: 1.5px solid #a5b9b2;
  color: black;
  background: none;
  outline: none;
`;

export const TitleTextInput = styled.input`
  font-size: 24px;
  height: 50px;
  padding: 0 8px 8px;
  width: 65%;
  font-weight: bold;

  ${() => textInputSyles}
`;
