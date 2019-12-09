import styled, { css } from 'styled-components';

export const AddSectionSpan = styled.span`
  font-size: 30px;
  margin-right: 16px;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const centeredContainerStyles = css`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const AddSectionContainer = styled.div`
  align-items: center;
  ${() => centeredContainerStyles}
`;

export const CreateQuizButton = styled.button`
  padding: 16px 32px;
  font-size: 24px;
  background: #2a289a;
  color: white;
  border: none;
  margin-top: 16px;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    background: rgba(42, 40, 154, 0.8);
  }
`;

export const CreateQuizButtonContainer = styled.div`
  ${() => centeredContainerStyles}
`;
