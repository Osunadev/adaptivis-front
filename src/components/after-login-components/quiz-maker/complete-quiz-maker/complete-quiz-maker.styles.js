import styled, { css } from 'styled-components';

export const AddSectionSpan = styled.span`
  font-size: 30px;
  margin-right: 16px;
  color: white;
`;

const centeredContainerStyles = css`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  cursor: pointer;
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
  border: 1px solid white;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    background: rgba(42, 40, 154, 0.8);
  }
`;

export const CreateQuizButtonContainer = styled.div`
  ${() => centeredContainerStyles}
`;
