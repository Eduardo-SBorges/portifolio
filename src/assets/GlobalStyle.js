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

      
      /* display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw; */
    }

    p, span{
      font-family: 'Roboto', sans-serif;
    }
  `

export default GlobalStyle
