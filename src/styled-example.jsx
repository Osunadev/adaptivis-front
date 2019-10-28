import React from 'react';

import styled, { ThemeProvider, css } from 'styled-components';

const theme = {
  primary: 'red',
  secondary: 'green',
  alert: 'yellow',
  font: 'sans-serif'
};

const Button = styled.button`
	font-family: ${props => props.theme.font};
	font-size: 1.3rem;
	border: none;
	border-radius: 5px;
	padding: 7px 10px;
	/* background: ${props => (props.primary ? 'red' : 'green')}; */
	${props =>
    props.color &&
    css`
      background: ${() => props.theme[props.color]};
    `}

	color: white;
	cursor: pointer;

	&:hover {
		background: blue;
	}
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-family: ${props => props.theme.secondary};
`;

function StyledExample() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <H1>Styled Components</H1>
        This is our initial react app
        <Button color='primary'>Create</Button>
      </div>
    </ThemeProvider>
  );
}

export default StyledExample;
