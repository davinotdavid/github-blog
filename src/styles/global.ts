import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background: ${(props) => props.theme.colors.baseBackground};
    color: ${(props) => props.theme.colors.baseText};
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    margin: 0;
  }
`;
