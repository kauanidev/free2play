import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray50};
  }
  
  body {
    background: url(/img/bg.png) ${({ theme }) =>
      theme.gray900} no-repeat center/cover;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.black65};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.card};
    border-radius: 999px;
  }
`;
