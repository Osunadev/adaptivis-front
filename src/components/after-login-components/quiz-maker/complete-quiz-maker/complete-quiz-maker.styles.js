import styled, { css } from 'styled-components';

const centeredContainerStyles = css`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const QuizTitle = styled.input`
  width: 1100px;
  background: white;
  margin: 32px auto;
  display: block;
  padding: 16px;
  font-size: 42px;
  text-transform: uppercase;
  text-align: center;
  color: black;
  font-family: 'Francois One', sans-serif;
`;

export const AddSectionSpan = styled.span`
  font-size: 30px;
  margin-right: 16px;
  color: white;
  font-weight: bold;
`;

export const AddSectionContainer = styled.div`
  align-items: center;
  ${() => centeredContainerStyles}
`;

export const CreateQuizButton = styled.button`
  padding: 16px 32px;
  font-size: 24px;
  background: rgba(42, 40, 154, 0.8);
  color: white;
  border: none;
  margin-top: 16px;
  border: 1.5px solid white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    border: 1.5px solid transparent;
  }
`;

export const CreateQuizButtonContainer = styled.div`
  ${() => centeredContainerStyles}
`;
