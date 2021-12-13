import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    }

    body {
      background-color: ${props => props.theme.background};
      color: ${props => props.theme.text}; 
    }
  `

export default GlobalStyle
