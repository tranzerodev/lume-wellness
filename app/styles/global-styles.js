import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${p => p.theme.text.main};
    font-weight: normal;
    font-style: normal;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    ${'' /* background-color: #fafafa; */}
    height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  p {
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    &:hover,
    &:active {
      text-decoration: none;
      color: inherit;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }
`;

export default GlobalStyle;
