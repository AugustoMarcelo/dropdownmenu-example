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
    width: 90%;
    margin: 100px auto;

    @media (max-width: 320px) {
      max-width: 280px;
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    }

    @media (min-width: 321px) and (max-width: 500px) {
      max-width: 400px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    @media (min-width: 501px) and (max-width: 767px) {
      max-width: 700px;
      width: 90%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
  }
`;