import styled, { css } from 'styled-components';
import { Icon } from 'antd';

const textInputSyles = css`
  display: block;
  border: none;
  color: black;
  background: none;
  outline: none;
`;

// Styled Components to make the columns
export const GridColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ColumnText = styled.input`
  font-size: 24px;
  height: 35px;
  width: 17%;
  padding: 0 16px;
  text-align: center;
  ${() => textInputSyles}

  ${props =>
    props.rightMargin &&
    css`
      margin-right: 6%;
    `}
`;

// Styled Components to make a single Option row
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`;

export const OptionNumber = styled.span`
  color: #67706d;
  font-size: 24px;
  height: 30px;
  width: 5%;
  text-align: center;
`;

export const OptionText = styled.input`
  font-size: 20px;
  height: 35px;
  width: 55%;

  ${() => textInputSyles}

  border-bottom: 1px solid #a5b9b2;
`;

export const OptionColumnBoxContainer = styled.div`
  width: 17%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const OptionColumnBox = styled.span`
  height: 25px;
  width: 25px;
  background: white;
  border: 1px solid #a5b9b2;
`;

export const RemoveOption = styled(Icon)`
  font-size: 20px;
  color: #a5b9b2;
  width: 6%;
`;

// Add Option Button
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const AddOptionButton = styled.button`
  padding: 8px 16px;
  background: white;
  margin-top: 8px;
  border: 1px solid #a5b9b2;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;
