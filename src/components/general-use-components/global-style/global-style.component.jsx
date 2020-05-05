import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.bgColor || 'white'}
    }
`;

export default GlobalStyle;
