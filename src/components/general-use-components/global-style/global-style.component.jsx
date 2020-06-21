import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props =>
          // @ts-ignore
          props.bgColor || 'white'}
    }
`;

export default GlobalStyle;
