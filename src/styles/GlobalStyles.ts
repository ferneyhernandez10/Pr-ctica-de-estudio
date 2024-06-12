import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 32px;
    color: rgb(85, 105, 220);
  }

  p, span {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: rgb(28, 35, 73);
  }
`;

export default GlobalStyles;
