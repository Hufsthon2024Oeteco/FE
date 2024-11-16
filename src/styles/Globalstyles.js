import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #AFAFAF;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #383838;
  }
  
`;

export default GlobalStyles;