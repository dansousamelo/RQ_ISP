import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *:hover,
  *:focus,
  *:active{
    outline: none;
  }

  button,
  fieldset,
  input {
    border: none;
    color: inherit;
    font: inherit;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }


  body {
    background-color: ${(props) => props.theme.colors.neutral900};
    color: ${(props) => props.theme.colors.neutral};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Open Sans, sans-serif;
  }
`
