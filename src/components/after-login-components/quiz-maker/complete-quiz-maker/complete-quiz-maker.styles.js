import styled from 'styled-components';

export const QuizTitle = styled.input`
  width: 1100px;
  border: none;
  background: transparent;
  margin: 24px auto;
  display: block;
  font-size: 48px;
  text-transform: uppercase;
  text-align: center;
  color: black;
  font-weight: bold;
  outline: none;

  &::placeholder {
    color: black;
  }
`;

export const AddSectionSpan = styled.span`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  /* margin: 0 auto 32px auto; */
`;

export const AddSectionContainer = styled.div`
  cursor: pointer;
  padding: 16px;
  border: 2px solid black;
  border-radius: 20px;
  background: white;
`;

export const CreateQuizButton = styled.button`
  font-size: 24px;
  type: button;
  background: white;
  border: none;
  color: black;
  cursor: pointer;
  padding: 16px 32px;
  font-weight: bold;
  transition: all 0.1s linear;
  border-bottom: 3px solid transparent;
  transition: all 0.3s linear;
  outline: none;

  &:hover {
    border-bottom: 3px solid black;
  }
`;

export const CreateQuizButtonContainer = styled.div`
  width: 1100px;
  margin: 32px auto;
  text-align: right;
`;
