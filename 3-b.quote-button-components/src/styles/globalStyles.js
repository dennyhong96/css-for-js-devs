import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* RESET CSS */
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
