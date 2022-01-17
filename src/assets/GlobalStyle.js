import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
  
  /* Não permite que o usuário selecione textos na página. */
  -webkit-touch-callout: none;  /* iPhone OS, Safari */
  -webkit-user-select: none;    /* Chrome, Safari 3 */
  -khtml-user-select: none;     /* Safari 2 */
  -moz-user-select: none;       /* Firefox */
  -ms-user-select: none;        /* IE10+ */
  user-select: none;            /* Possível implementação no futuro */
  
  /* Não permite que o usuário arraste imagens na página. */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -user-drag: none;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text}; 
    
    a, a > button {
      position: relative;
      z-index: 1; 
    }

    p, span{
      font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display, serif'
    }
  } 
`;

export default GlobalStyle;
