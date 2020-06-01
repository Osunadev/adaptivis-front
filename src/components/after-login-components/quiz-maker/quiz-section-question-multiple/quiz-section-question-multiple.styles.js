import styled, { css } from 'styled-components';
import { Icon } from 'antd';

export const OptionCircle = styled.div`
  height: 20px;
  width: 20px;
  background: white;
  border: 1.5px solid gray;
  border-radius: 50%;
  margin-right: 16px;
`;

const textInputSyles = css`
  display: block;
  border: none;
  border-bottom: 1px solid #a5b9b2;
  color: black;
  background: none;
  outline: none;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0 16px;
`;

export const OptionText = styled.input`
  font-size: 20px;
  height: 35px;
  width: 95%;

  ${() => textInputSyles}
`;

export const RemoveText = styled(Icon)`
  margin-left: 16px;
  font-size: 20px;
  color: #a5b9b2;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddOptionButton = styled.button`
  type: 'button';
  padding: 8px 16px;
  background: white;
  margin-top: 8px;
  border: 1px solid #a5b9b2;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;
