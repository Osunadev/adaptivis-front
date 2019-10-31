import styled from 'styled-components';

export const ContainerTitle = styled.h1`
  font-size: 32px;
  color: white;
`;

export const ContainerImage = styled.img`
  height: 200px;
  width: auto;
  padding: 20px;
`;

export const Container = styled.div`
  background: #2a289a;
  width: 40%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;
