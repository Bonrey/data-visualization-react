import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    
    @media only screen and (max-width: 1024px) {
      font-size: calc(100vw / 64);
    }
  }

  body {
    margin: 0;
    padding: 5rem;
  }

`

export default globalStyle;
