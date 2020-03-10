import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  .App {
    max-width: 800px;
    width: 100%;
    margin: 100px auto;
  }
`;