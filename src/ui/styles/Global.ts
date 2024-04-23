import { createGlobalStyle } from 'styled-components';
import { PageStyledType } from '../../data/@types/PageStyled/PageStyled.type';

const GlobalStyle = createGlobalStyle<PageStyledType>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.fontColor};
    transition: .5s all;
  }

  html {
    font-size: ${(props) => props.fontSize}px;
  }

  body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
