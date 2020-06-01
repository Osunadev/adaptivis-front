import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 1100px;
  background: #0655a3;
  margin: 32px auto;
  padding: 16px 32px 32px;
  border-radius: 20px;
`;

export const AddButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  background: white;
  color: black;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  margin: 0 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: rgb(45, 45, 45);
  }
`;
