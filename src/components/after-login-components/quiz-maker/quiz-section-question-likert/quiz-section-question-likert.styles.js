import styled, { css } from 'styled-components';

export const LikertTopRangeContainer = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const LikertQuestionContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

const textInputSyles = css`
  display: block;
  border: none;
  border-bottom: 1px solid #a5b9b2;
  color: black;
  background: none;
  outline: none;
`;

export const LikertLabelInput = styled.input`
  font-size: 20px;
  height: 35px;
  width: 45%;
  margin-bottom: 16px;

  ${() => textInputSyles}
`;

export const LikertRangeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LikertRangeNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 16px;
`;
