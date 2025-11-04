import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SF Mono";
    src: local("SF Mono"), local("SFMono-Regular");
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
      }
`;

export default GlobalStyles;